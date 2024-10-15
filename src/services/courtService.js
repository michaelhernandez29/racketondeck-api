import _ from 'lodash-es';
import { Op } from 'sequelize';

import Court from '../models/court.js';

/**
 * Creates a new court in the database.
 *
 * @param {object} data - The data for the new court to be created.
 * @returns {Promise<object>} The created court object with plain data format.
 */
const create = async (data) => {
  const response = await Court.create(data);
  return response.get({ plain: true });
};

/**
 * Retrieves a court by id from the database.
 *
 * @param {string} id - The id of the court to be retrieved.
 * @param {object} [params=null] - Additional options for the query.
 * @returns {Promise<object|null>} The court object if found, or null if not.
 */
const findById = async (id, params = null) => {
  return Court.findOne({ where: { id }, ...params });
};

/**
 * Finds and counts courts based on provided filters and pagination options.
 *
 * @param {object} filters - The filters and pagination options to apply.
 * @param {object} [params=null] - Additional query options such as transaction or attributes.
 * @returns {Promise<object>} An object containing the total count of courts and the array of courts.
 */
const findAndCountAll = async (filters, params = null) => {
  const { page, limit, find, order, academyId } = filters;

  let orderClause = [['name', 'ASC']];
  const offset = page * limit;
  const where = { academyId };

  if (!_.isNil(find)) {
    where[Op.or] = [{ name: { [Op.iLike]: `%${find}%` } }];
  }

  if (order === 'z-a') {
    orderClause = [['name', 'DESC']];
  }

  return Court.findAndCountAll({ where, order: orderClause, offset, limit, ...params });
};

export default { create, findById, findAndCountAll };
