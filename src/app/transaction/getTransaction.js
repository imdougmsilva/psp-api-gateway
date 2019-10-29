import db from '../../models';
import httpResponseHandler from '../../lib/common/httpResponseHandler';
import { OK } from '../../lib/common/httpCodes';

const {
  transaction: TransactionModel,
} = db;


const getTransaction = async (data) => {
  try {
    const { merchantId } = data;
    const transactions = await TransactionModel.findAll({ where: { merchantId } });
    return httpResponseHandler({ transactions }, OK);
  } catch (err) {
    throw new Error(err.message);
  }
};

export default getTransaction;
