import path from 'path';
import express from 'express';
import compress from 'compression';
import colors from 'colors';

import React from 'react';
import Router from 'react-router';
import DocMeta from 'react-doc-meta';

import Iso from 'iso';
import alt from './src/app/alt.js';

import appConfig from './appConfig.js';
import analytics from './analytics.js';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackConfig from './webpack.config.js';

import routes from './src/app/routes/routes.js';
import apiRoutes from './src/server/ApiRoutes/ApiRoutes.js';

const ROOT_PATH = __dirname;
const INDEX_PATH = path.resolve(ROOT_PATH, 'src/client');
const DIST_PATH = path.resolve(ROOT_PATH, 'dist');
const VIEWS_PATH = path.resolve(ROOT_PATH, 'src/views');
const WEBPACK_DEV_PORT = appConfig.webpackDevServerPort || 3000;

const isProduction = process.env.NODE_ENV === 'production';
const app = express();

app.use(compress());

// Disables the Server response from
// displaying Express as the server engine
app.disable('x-powered-by');

// Set the view engine to EJS
app.set('view engine', 'ejs');
app.set('views', VIEWS_PATH);

app.set('port', process.env.PORT || 3001);

// * is used for Reverse Proxy at the moment but can be cleaned up:
// For webpack
app.use('*/dist', express.static(DIST_PATH));
// For images
app.use('*/src/client', express.static(INDEX_PATH));


app.use('/', apiRoutes);

app.use('/', (req, res) => {
  let iso;

  alt.bootstrap(JSON.stringify(res.locals.data || {}));

  iso = new Iso();

  Router.run(routes.server, req.path, (Root, state) => {
    const html = React.renderToString(<Root route={req.path} />);
    iso.add(html, alt.flush());

    // First parameter references the ejs filename
    res.render('index', {
      app: iso.render(),
      appTitle: appConfig.appTitle,
      favicon: appConfig.favIconPath,
      gaCode: analytics.google.code(isProduction),
      webpackPort: WEBPACK_DEV_PORT,
      appEnv: process.env.APP_ENV,
      isProduction,
    });
  });
});

const server = app.listen(app.get('port'), (error, result) => {
  if (error) {
    console.log(colors.red(error));
  }

  console.log(colors.yellow.underline(appConfig.appName));
  console.log(
    colors.green('Express server is listening at'),
    colors.cyan('localhost:' + app.get('port'))
  );
});

// This function is called when you want the server to die gracefully
// i.e. wait for existing connections
const gracefulShutdown = () => {
  console.log('Received kill signal, shutting down gracefully.');
  server.close(() => {
    console.log('Closed out remaining connections.');
    process.exit(0);
  });
  // if after
  setTimeout(() => {
    console.error('Could not close connections in time, forcefully shutting down');
    process.exit();
  }, 1000);
};
// listen for TERM signal .e.g. kill
process.on('SIGTERM', gracefulShutdown);
// listen for INT signal e.g. Ctrl-C
process.on('SIGINT', gracefulShutdown);


/* Development Environment Configuration
 * -------------------------------------
 * - Using Webpack Dev Server
*/
if (!isProduction) {
  new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    stats: false,
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001',
      'Access-Control-Allow-Headers': 'X-Requested-With',
    },
  }).listen(3000, 'localhost', (error, result) => {
    if (error) {
      console.log(colors.red(error));
    }
    console.log(colors.magenta('Webpack Dev Server listening at'), colors.cyan('localhost3000'));
  });
}
