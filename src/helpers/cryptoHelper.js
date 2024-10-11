import bcrypt from 'bcrypt';

import config from '../config/index.js';
const bcryptConfig = config.crypto.bcrypt;

/**
 * Hashes a password using bcrypt.
 *
 * @param {string} text - The plain text password to hash.
 * @returns {Promise<string>} A promise that resolves to the hashed password.
 */
const hash = async (text) => {
  return bcrypt.hash(text, bcryptConfig.saltRounds);
};

export default { hash };
