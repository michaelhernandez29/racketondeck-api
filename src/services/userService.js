import _ from 'lodash-es';

import User from '../models/user.js';

/**
 * Creates a new user in the database.
 *
 * @param {object} data - The data for the new user to be created.
 * @returns {Promise<object>} The created user object with plain data format.
 */
const create = async (data) => {
  let response = await User.create(data);
  response = response.get({ plain: true });
  return _.omit(response, 'password');
};

/**
 * Retrieves a user by email from the database.
 *
 * @param {string} email - The email of the user to be retrieved.
 * @param {object} [params=null] - Additional options for the query.
 * @returns {Promise<object|null>} The user object if found, or null if not.
 */
const findByEmail = async (email, params = null) => {
  return User.findOne({ where: { email }, ...params });
};

export default { create, findByEmail };
