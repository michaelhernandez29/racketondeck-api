import errorCodes from '../constants/errorCodes.js';
import errorMessages from '../constants/errorMessages.js';
import responseHelper from '../helpers/responseHelper.js';
import academyService from '../services/academyService.js';
import courtService from '../services/courtService.js';

/**
 * Handler for POST /academies/{academyId}/courts
 *
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 */
const create = async (req, res) => {
  const { academyId } = req.params;
  const payload = req.body;

  const academy = await academyService.findById(academyId, { raw: true });
  if (!academy) {
    responseHelper.notFound(req, res, errorMessages.ACADEMY_NOT_FOUND, errorCodes.ACADEMY_NOT_FOUND);
    return;
  }

  const data = { academyId, ...payload };
  const response = await courtService.create(data);
  responseHelper.created(req, res, response);
};

export { create };
