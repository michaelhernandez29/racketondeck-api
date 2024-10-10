import app from './server.js';

import logger from './helpers/logger.js';

import config from './config/config.js';
const appConfig = config.app;

const PORT = appConfig.port;
app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});
