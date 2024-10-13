import validator from 'validator';

import errorCodes from '../constants/errorCodes.js';
import errorMessages from '../constants/errorMessages.js';
import cryptoHelper from '../helpers/cryptoHelper.js';
import responseHelper from '../helpers/responseHelper.js';
import accountService from '../services/accountService.js';
import userService from '../services/userService.js';

/**
 * Handler for POST /accounts/{accountId}/users
 *
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 */
const create = async (req, res) => {
  const { accountId } = req.params;
  const payload = req.body;

  if (!validator.isEmail(payload.email)) {
    responseHelper.badRequest(req, res, errorMessages.INVALID_EMAIL_FORMAT, errorCodes.BAD_REQUEST);
    return;
  }

  const account = await accountService.findById(accountId, { raw: true });
  if (!account) {
    responseHelper.notFound(req, res, errorMessages.ACCOUNT_NOT_FOUND, errorCodes.ACCOUNT_NOT_FOUND);
    return;
  }

  const user = await userService.findByEmail(payload.email, { raw: true });
  if (user) {
    responseHelper.conflict(req, res, errorMessages.DUPLICATE_EMAIL, errorCodes.CONFLICT);
    return;
  }

  payload.accountId = accountId;
  payload.password = await cryptoHelper.hash(payload.password);
  const response = await userService.create(payload);

  responseHelper.created(req, res, response);
};

/**
 * Handler for GET /accounts/{accountId}/users
 *
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 */
const findAndCountAll = async (req, res) => {
  const { accountId } = req.params;
  const queries = req.query;

  const account = await accountService.findById(accountId, { raw: true });
  if (!account) {
    responseHelper.notFound(req, res, errorMessages.ACCOUNT_NOT_FOUND, errorCodes.ACCOUNT_NOT_FOUND);
    return;
  }

  const filters = { accountId, ...queries };
  const response = await userService.findAndCountAll(filters, { raw: true, attributes: { exclude: ['password'] } });
  responseHelper.ok(req, res, response.rows, response.count);
};

export { create, findAndCountAll };
