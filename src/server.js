import express from 'express';

import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

import logger from './helpers/logger.js';

import config from './config/index.js';
const appConfig = config.app;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
app.use(compression);

const PORT = appConfig.port;
app.listen(PORT, () => {
  logger.info(`Server listening on port ${PORT}`);
});

export default app;
