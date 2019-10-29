import { UNAUTHORIZED, NOT_ACCEPTABLE } from '../lib/common/httpCodes';
import db from '../models';

const { merchants: MerchantModel } = db;

const validateTokenMerchant = async (req, res, next) => {
  if (!req.headers['x-token-merchant']) {
    return res.status(UNAUTHORIZED).send('Token Merchant is not defined');
  }

  const merchant = await MerchantModel.checkMerchantIsValidByToken(
    req.headers['x-token-merchant'],
  );

  if (!merchant) {
    return res.status(NOT_ACCEPTABLE).send('Merchant is not defined');
  }

  req.body.merchantId = merchant.id;

  return next();
};

export default validateTokenMerchant;
