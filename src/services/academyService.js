import Academy from '../models/academy.js';

/**
 * Creates a new academy in the database.
 *
 * This function inserts a new academy record into the database using the provided data.
 * Once the academy is created, it returns the plain object representation of the created academy.
 *
 * @param {object} data - The data to create the academy, including fields such as name, accountId, and other details.
 * @returns {Promise<object>} The plain object representation of the created academy.
 */
const create = async (data) => {
  const response = await Academy.create(data);
  return response.get({ plain: true });
};

export default { create };
