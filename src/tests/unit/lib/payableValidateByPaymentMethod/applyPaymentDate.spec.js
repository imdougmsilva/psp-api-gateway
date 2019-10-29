import assert from 'assert';
import {
  describe,
  it,
} from 'mocha';

import { applyPaymentDate } from '../../../../lib/common/payableValidateByPaymentMethod';


describe('[Unit] Lib/applyPaymentDate', () => {
  it('Should return data about debit PaymentMethod', () => {
    const PaymentMethod = 'debit';
    const returnContent = applyPaymentDate(PaymentMethod);
    assert((new Date()).getDate() === (new Date(returnContent)).getDate());
  });
});

describe('[Unit] Lib/applyPaymentDate', () => {
  it('Should return data about credit PaymentMethod', () => {
    const PaymentMethod = 'credit';
    const returnContent = applyPaymentDate(PaymentMethod);
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 30);
    assert(((currentDate.getDate())) === (new Date(returnContent)).getDate());
  });
});
