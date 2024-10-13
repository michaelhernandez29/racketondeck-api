import _ from 'lodash-es';

import { Op } from 'sequelize';
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

/**
 * Retrieves and counts users based on filters and pagination options.
 *
 * @param {object} filters - The filtering and pagination options.
 * @param {object} [params=null] - Additional options for the query, such as transaction or attributes.
 * @returns {Promise<object>} The result containing the count of users and the array of users.
 */
const findAndCountAll = async (filters, params = null) => {
  const { page, limit, find, order, accountId, type } = filters;

  let orderClause = [['name', 'ASC']];
  const offset = page * limit;
  const where = { accountId };

  if (!_.isNil(type)) {
    where.type = type;
  }

  if (!_.isNil(find)) {
    where[Op.or] = [{ name: { [Op.iLike]: `%${find}%` } }, { email: { [Op.iLike]: `%${find}%` } }];
  }

  if (order === 'z-a') {
    orderClause = [['name', 'DESC']];
  }

  return User.findAndCountAll({ where, order: orderClause, offset, limit, ...params });
};

export default { create, findByEmail, findAndCountAll };
