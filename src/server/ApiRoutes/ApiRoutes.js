import express from 'express';
import axios from 'axios';

// import parser from 'jsonapi-parserinator';

import appConfig from '../../../appConfig.js';

const { refineryApi } = appConfig;
const router = express.Router();
const appEnvironment = process.env.APP_ENV || 'production';
const apiRoot = refineryApi.root[appEnvironment];
  // options = {
  //   endpoint: `${apiRoot}${refineryApi.endpoint}`,
  //   includes: refineryApi.includes,
  //   filters: refineryApi.filters
  // };

// const completeApiUrl = parser.getCompleteApi(options);

router
  .route('/*')
  .get((req, res, next) => {
    res.locals.data = {
      Store: {
        angularApps: [
          { id: 'Locations', link: 'https://nypl.org/locations' },
          { id: 'Divisions', link: 'https://nypl.org/research-divisions' },
          { id: 'Profiles', link: 'https://nypl.org/staff-profiles' },
        ],
        reactApps: [
          { id: 'Staff Picks', link: 'https://nypl.org/staffpicks' },
          {
            id: 'Book Lists',
            link: 'https://nypl.org/browse/recommendations/lists/nypl_mid_manhattan',
          },
          { id: 'Header', link: 'https://nypl.org' },
          { id: 'Homepage', link: 'https://nypl.org' },
          { id: 'New Arrivals', link: 'https://nypl.org/newarrivals' },
          { id: 'Search Beta', link: 'https://nypl.org/searchbeta' },
          { id: 'Blogs Beta', link: 'https://nypl.org/blog/beta' },
        ],
      },
      completeApiUrl: '',
    };

    // The next is needed so that Express knows to go to the
    // next middleware in the line.
    // This would be the app.get('/', ...) call in server.js.
    next();
  });

export default router;
