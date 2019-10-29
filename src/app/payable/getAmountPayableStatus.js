
import sequelize from 'sequelize';
import db from '../../models';
import httpResponseHandler from '../../lib/common/httpResponseHandler';
import { OK } from '../../lib/common/httpCodes';

const {
  payable: PayableModel,
} = db;


const getAmountPayableStatus = async (data) => {
  try {
    const { merchantId } = data;

    const payables = await PayableModel.findAll({
      attributes: ['status', [sequelize.fn('sum', sequelize.col('price_fee')), 'total']],
      group: ['payable.status'],
      raw: true,
      order: sequelize.literal('total DESC'),
      where: { merchantId },
    });
    return httpResponseHandler({ payables }, OK);
  } catch (err) {
    throw new Error(err.message);
  }
};

export default getAmountPayableStatus;
