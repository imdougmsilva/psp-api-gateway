import assert from 'assert';
import {
  describe,
  it,
} from 'mocha';

import db from '../../../models/index';

const { transaction: TransactionModel } = db;

describe('[Unit] Model Transaction', async () => {
  const transactionData = {
    price: '100.50',
    description: 'Smartband XYZ 3.0',
    cardNumber: '5227207149481829',
    cardBrand: 'mastercard',
    cvv: '321',
    cardExpirationDate: '2020-03-05',
    cardHolder: 'Douglas Silva',
    paymentMethod: 'debit',

  };

  it('1) Should validate obrigatory fields TRUE', async () => {
    const transaction = await TransactionModel.build(transactionData);
    assert(await transaction.validate());
  });

  const WrongEnumTransactionData = {
    price: '100.50',
    description: 'Smartband XYZ 3.0',
    cardNumber: '5227207149481829',
    cardBrand: 'mastercard',
    cvv: '321',
    cardExpirationDate: '2020-03-05',
    cardHolder: 'Douglas Silva',
    paymentMethod: 'ditongo',

  };

  it('2) Should validate allowed value paymentMethod from enums', async () => {
    try {
      const wrongEnumTransactionData = await TransactionModel.build(WrongEnumTransactionData);
      assert(await wrongEnumTransactionData.validate());
    } catch (error) {
      assert(error.message.search('Validation error: Field must have a valid value!') >= 0);
    }
  });

  const WrongAllowedTransactionData = {
    price: '100.50',
    description: 'Smartband XYZ 3.0',
    cardNumber: '5227207149481829',
    cardBrand: 'mastercard',
    cvv: '321',
    cardExpirationDate: '2020-03-05',
    cardHolder: 'Douglas Silva',
    paymentMethod: 'debit',

  };

  it('3) Should validate allowed value Transaction from enums', async () => {
    try {
      const wrongAllowedTransactionData = await TransactionModel.build(WrongAllowedTransactionData);
      assert(await wrongAllowedTransactionData.validate());
    } catch (error) {
      assert(error.message === 'Validation error: Step must have a valid value!');
    }
  });
});
