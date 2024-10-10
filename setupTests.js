import server from './src/server.js';

import config from './src/config/config.js';
const appConfig = config.app;

let app;
beforeAll(() => {
  app = server.listen(appConfig.port);
});

afterAll((done) => {
  app.close(() => {
    done();
  });
});
