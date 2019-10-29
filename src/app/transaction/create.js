import db from '../../models';
import httpResponseHandler from '../../lib/common/httpResponseHandler';
import { CREATED } from '../../lib/common/httpCodes';

const {
  transaction: TransactionModel,
  payable: PayableModel,
} = db;


const create = async (data) => {
  try {
    const transaction = await TransactionModel.create({ ...data });
    await PayableModel.createPayable(transaction);
    return httpResponseHandler({ transaction }, CREATED);
  } catch (err) {
    throw new Error(err.message);
  }
};

export default create;
