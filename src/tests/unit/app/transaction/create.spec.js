import assert from 'assert';
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from 'mocha';
import sinon from 'sinon';
import { createTransaction } from '../../../../app/transaction';
import db from '../../../../models';

const {
  transaction: TransactionModel,
  payable: PayableModel,
} = db;

describe('[Unit] Create Transaction ', () => {
  const mySandBox = sinon.createSandbox();

  const createData = {
    price: '101.50',
    description: 'Smartband XYZ 3.0',
    cardNumber: '5227207149481829',
    cvv: '321',
    cardExpirationDate: '2020-03-05',
    cardHolder: 'Douglas Silva',
    paymentMethod: 'credit',

  };

  beforeEach(() => {
    mySandBox.stub(TransactionModel, 'create');
    mySandBox.stub(PayableModel, 'createPayable');
  });

  afterEach(() => {
    mySandBox.restore();
  });

  it('Should create a new attendance history', async () => {
    TransactionModel.create.returns(createData);
    PayableModel.createPayable(createData);

    const id = '2bc2147d-9c78-46df-a48f-ada78c5256d0';

    TransactionModel.create.returns({
      createdAt: '2019-10-29T16:35:01.895Z',
      id: '2bc2147d-9c78-46df-a48f-ada78c5256d0',
      price: '101.50',
      description: 'Smartband XYZ 3.0',
      cardNumber: '1829',
      cvv: 321,
      cardExpirationDate: '2020-03-05T00:00:00.000Z',
      cardHolder: 'Douglas Silva',
      paymentMethod: 'credit',
      merchantId: '30d8a1a7-06c8-4833-8d7d-0d09f7186f48',
      updatedAt: '2019-10-29T16:35:01.896Z',
      deleted_at: null,
    });

    const { body: newTransaction } = await createTransaction(createData);
    assert(newTransaction.transaction.id === id);
  });
});
