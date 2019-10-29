import valid from 'card-validator';
import { NOT_ACCEPTABLE } from '../lib/common/httpCodes';

const validateCardBrand = async (req, res, next) => {
  const { cardNumber } = req.body;

  const { card, isValid } = valid.number(cardNumber);

  if (!isValid) {
    return res.status(NOT_ACCEPTABLE).send('card number is not defined');
  }

  req.body.cardNumber = cardNumber.substr(12, cardNumber.length);
  req.body.cardBrand = card.type;

  return next();
};

export default validateCardBrand;
