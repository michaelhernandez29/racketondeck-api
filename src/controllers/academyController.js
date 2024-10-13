import errorCodes from '../constants/errorCodes.js';
import errorMessages from '../constants/errorMessages.js';
import responseHelper from '../helpers/responseHelper.js';
import academyService from '../services/academyService.js';
import accountService from '../services/accountService.js';

/**
 * Handler for POST /accounts/{accountId}/academies
 *
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 */
const create = async (req, res) => {
  const { accountId } = req.params;
  const payload = req.body;

  const account = await accountService.findById(accountId, { raw: true });
  if (!account) {
    responseHelper.notFound(req, res, errorMessages.ACCOUNT_NOT_FOUND, errorCodes.ACCOUNT_NOT_FOUND);
    return;
  }

  const data = { accountId, ...payload };
  const response = await academyService.create(data);
  responseHelper.created(req, res, response);
};

export { create };
