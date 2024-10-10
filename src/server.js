import express from 'express';

import compression from 'compression';
import cors from 'cors';
import helmet from 'helmet';

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use(helmet());
server.use(cors({ origin: '*', methods: ['GET', 'POST', 'PUT', 'DELETE'] }));
server.use(compression);

export default server;
