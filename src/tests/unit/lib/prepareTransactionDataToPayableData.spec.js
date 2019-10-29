import assert from 'assert';
import {
  describe,
  it,
} from 'mocha';

import prepareTransactionDataToPayableData from '../../../lib/common/prepareTransactionDataToPayableData';


describe('[Unit] Lib/applyPaymentDate', () => {
  it('Should return data about debit PaymentMethod', () => {
    const transactionData = {
      paymentMethod: 'debit',
      price: '150.30',
      merchantId: '30d8a1a7-06c8-4833-8d7d-0d09f7186f48',
      id: 'a21385c2-883b-4de1-a605-03c2370d8508',
    };

    const contentPrepareTransactionCompare = {
      merchantId: '30d8a1a7-06c8-4833-8d7d-0d09f7186f48',
      transactionId: 'a21385c2-883b-4de1-a605-03c2370d8508',
      priceFee: 145.791,
      status: 'paid',
      paymentDate: 1572382458132,
    };

    const content = prepareTransactionDataToPayableData(transactionData);

    assert(contentPrepareTransactionCompare.priceFee === content.priceFee);
    assert(contentPrepareTransactionCompare.merchantId === content.merchantId);
    assert(contentPrepareTransactionCompare.paymentMethod === content.paymentMethod);
    assert(contentPrepareTransactionCompare.transactionId === content.transactionId);
  });
});

describe('[Unit] Lib/applyPaymentDate', () => {
  it('Should return data about credit PaymentMethod', () => {
    const transactionData = {
      paymentMethod: 'credit',
      price: '150.30',
      merchantId: '30d8a1a7-06c8-4833-8d7d-0d09f7186f48',
      id: 'a21385c2-883b-4de1-a605-03c2370d8508',
    };

    const contentPrepareTransactionCompare = {
      merchantId: '30d8a1a7-06c8-4833-8d7d-0d09f7186f48',
      transactionId: 'a21385c2-883b-4de1-a605-03c2370d8508',
      priceFee: 142.78500000000003,
      status: 'waiting_funds',
      paymentDate: 1574971403066,
    };

    const content = prepareTransactionDataToPayableData(transactionData);

    assert(contentPrepareTransactionCompare.priceFee === content.priceFee);
    assert(contentPrepareTransactionCompare.merchantId === content.merchantId);
    assert(contentPrepareTransactionCompare.paymentMethod === content.paymentMethod);
    assert(contentPrepareTransactionCompare.transactionId === content.transactionId);
  });
});
