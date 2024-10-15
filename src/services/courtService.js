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

export default { create };
