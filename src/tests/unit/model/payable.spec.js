import assert from 'assert';
import {
  describe,
  it,
} from 'mocha';

import db from '../../../models/index';

const { payable: PayableModel } = db;

describe('[Unit] Model Payable', async () => {
  const TransactionData = {
    merchantId: 'acd00864-13cc-498d-9458-8b40c3ccb1b8',
    transactionId: '97951cb5-75fb-4871-bc0d-6a2ae3f870a3',
    priceFee: '100.30',
    status: 'paid',
    paymentDate: '2019-10-29 00:00:00',
  };

  it('1) Should validate obrigatory fields TRUE', async () => {
    const payable = await PayableModel.build(TransactionData);
    assert(await payable.validate());
  });

  const WrongEnumPayableData = {
    merchantId: 'acd00864-13cc-498d-9458-8b40c3ccb1b8',
    transactionId: '97951cb5-75fb-4871-bc0d-6a2ae3f870a3',
    priceFee: '100.30',
    status: 'ditongo',
    paymentDate: '2019-10-29 00:00:00',
  };

  it('2) Should validate allowed value status from enums', async () => {
    try {
      const wrongEnumPayableData = await PayableModel.build(WrongEnumPayableData);
      assert(await wrongEnumPayableData.validate());
    } catch (error) {
      assert(error.message.search('Validation error: Field must have a valid value!') >= 0);
    }
  });
});
