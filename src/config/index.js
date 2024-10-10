import path from 'path';
import url from 'url';

import logger from '../helpers/logger';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const file = `${__dirname}/config.js`;

let env;
try {
  env((await import(file)?.default) ?? {});
} catch (error) {
  logger.error({ message: 'ERROR; No configuration file found', error });
}

export default env;
