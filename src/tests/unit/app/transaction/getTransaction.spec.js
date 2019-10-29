import assert from 'assert';
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from 'mocha';
import sinon from 'sinon';
import getTransaction from '../../../../app/transaction/getTransaction';
import db from '../../../../models';

const { transaction: TransactionModel } = db;

describe('[Unit] getTransaction', () => {
  const getTransactionList = {
    transactions: [
      {
        id: 'a70220c4-11d7-4a08-b0df-9a23ae1e17d0',
        merchantId: '30d8a1a7-06c8-4833-8d7d-0d09f7186f48',
        price: '100.50',
        description: 'Smartband XYZ 3.0',
        cardNumber: '1829',
        cvv: 321,
        cardExpirationDate: '2020-03-05T00:00:00.000Z',
        cardHolder: 'Douglas Silva',
        paymentMethod: 'debit',
        createdAt: '2019-10-28T22:35:08.448Z',
        updatedAt: '2019-10-28T22:35:08.448Z',
        deleted_at: null,
      },
      {
        id: 'daf97e5f-e60c-479a-ad9d-5e6d07a89f3d',
        merchantId: '30d8a1a7-06c8-4833-8d7d-0d09f7186f48',
        price: '100.50',
        description: 'Smartband XYZ 3.0',
        cardNumber: '1829',
        cvv: 321,
        cardExpirationDate: '2020-03-05T00:00:00.000Z',
        cardHolder: 'Douglas Silva',
        paymentMethod: 'debit',
        createdAt: '2019-10-28T22:35:11.593Z',
        updatedAt: '2019-10-28T22:35:11.593Z',
        deleted_at: null,
      },
      {
        id: '8772426a-38cb-4831-9960-e3b46409c937',
        merchantId: '30d8a1a7-06c8-4833-8d7d-0d09f7186f48',
        price: '100.50',
        description: 'Smartband XYZ 3.0',
        cardNumber: '1829',
        cvv: 321,
        cardExpirationDate: '2020-03-05T00:00:00.000Z',
        cardHolder: 'Douglas Silva',
        paymentMethod: 'debit',
        createdAt: '2019-10-28T22:36:26.789Z',
        updatedAt: '2019-10-28T22:36:26.789Z',
        deleted_at: null,
      },
    ],
  };

  const mySandBox = sinon.createSandbox();
  beforeEach(() => {
    mySandBox.stub(TransactionModel, 'findAll');
  });

  afterEach(() => {
    mySandBox.restore();
  });

  it('Should list values', async () => {
    const data = {
      merchantId: 'b22024ac-c404-493d-a73f-eae7bbfd9648',
    };

    TransactionModel.findAll.returns(getTransactionList);
    const { body: transaction } = await getTransaction(data);
    assert(transaction);
  });
});
