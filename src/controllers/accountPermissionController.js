import errorCodes from '../constants/errorCodes.js';
import errorMessages from '../constants/errorMessages.js';
import responseHelper from '../helpers/responseHelper.js';
import accountPermissionService from '../services/accountPermissionService.js';
import accountService from '../services/accountService.js';
import userService from '../services/userService.js';

/**
 * Handler for POST /accounts/{accountId}/users/{userId}/permissions
 *
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 */
const create = async (req, res) => {
  const { accountId, userId } = req.params;
  const payload = req.body;

  const account = await accountService.findById(accountId, { raw: true });
  if (!account) {
    responseHelper.notFound(req, res, errorMessages.ACCOUNT_NOT_FOUND, errorCodes.ACCOUNT_NOT_FOUND);
    return;
  }

  const user = await userService.findById(userId, { raw: true });
  if (!user) {
    responseHelper.notFound(req, res, errorMessages.USER_NOT_FOUND, errorCodes.USER_NOT_FOUND);
    return;
  }

  const data = { accountId, userId, ...payload };
  const response = await accountPermissionService.create(data);
  responseHelper.created(req, res, response);
};

export { create };
