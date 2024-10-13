import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import config from '../config/index.js';
const bcryptConfig = config.crypto.bcrypt;
const jwtConfig = config.crypto.jwt;

/**
 * Hashes a password using bcrypt.
 *
 * @param {string} text - The plain text password to hash.
 * @returns {Promise<string>} A promise that resolves to the hashed password.
 */
const hash = async (text) => {
  return bcrypt.hash(text, bcryptConfig.saltRounds);
};

/**
 * Compares a plain text password with a hashed password using bcrypt.
 *
 * @param {string} text - The plain text password to compare.
 * @param {string} hash - The hashed password to compare against.
 * @returns {Promise<boolean>} A promise that resolves to `true` if the passwords match, or `false` if they do not.
 */
const compare = async (text, hash) => {
  return bcrypt.compare(text, hash);
};

/**
 * Generates a JWT for a given user.
 *
 * @param {object} payload - The payload data to include in the JWT (e.g., userId, email).
 * @returns {string} The generated JWT token.
 */
const sign = (payload) => {
  return jwt.sign(payload, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
};

/**
 * Verifies a JWT token.
 *
 * @param {string} token - The JWT token to verify.
 * @returns {object|boolean} The decoded payload if the token is valid, or `false` if it's invalid.
 */
const verify = (token) => {
  return jwt.verify(token, jwtConfig.secret);
};

export default { hash, compare, sign, verify };
