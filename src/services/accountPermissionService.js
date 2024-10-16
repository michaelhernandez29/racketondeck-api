import AccountPermission from '../models/accountPermission.js';

/**
 * Creates a new account permission in the database.
 *
 * @param {object} data - The data for the new account permission.
 * @returns {Promise<object>} A promise that resolves to the created account permission object in plain format.
 */
const create = async (data) => {
  const response = await AccountPermission.create(data);
  return response.get({ plain: true });
};

export default { create };
