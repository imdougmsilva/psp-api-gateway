import assert from 'assert';
import {
  describe,
  it,
} from 'mocha';

import { applyPercentFeeInPriceFee } from '../../../../lib/common/payableValidateByPaymentMethod';


describe('[Unit] Lib/applyPercentFeeInPriceFee.', () => {
  it('Should return fee_price about debit', () => {
    const PaymentMethod = 'debit';
    const feePrice = 97.485;
    const returnContent = applyPercentFeeInPriceFee('100.50', PaymentMethod);
    assert((returnContent === feePrice));
  });
});

describe('[Unit] Lib/applyPercentFeeInPriceFee', () => {
  it('Should return fee_price about credit', () => {
    const PaymentMethod = 'credit';
    const feePrice = 95.475;
    const returnContent = applyPercentFeeInPriceFee('100.50', PaymentMethod);
    assert((returnContent === feePrice));
  });
});
