import assert from 'assert';
import {
  describe,
  it,
} from 'mocha';

import { applyStatusFeeByPaymentMethod } from '../../../../lib/common/payableValidateByPaymentMethod';

describe('[Unit] Lib/applyStatusFeeByPaymentMethod.', () => {
  it('Should return status waiting_funds about paymentMethod debit', () => {
    const PaymentMethod = 'debit';
    const returnContent = applyStatusFeeByPaymentMethod(PaymentMethod);
    assert((returnContent === 'paid'));
  });
});

describe('[Unit] Lib/applyPercentFeeInPriceFee', () => {
  it('Should return status waiting_funds about paymentMethod credit', () => {
    const PaymentMethod = 'credit';
    const returnContent = applyStatusFeeByPaymentMethod(PaymentMethod);
    assert((returnContent === 'waiting_funds'));
  });
});
