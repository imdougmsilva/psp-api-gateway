import assert from 'assert';
import {
  describe,
  it,
  beforeEach,
  afterEach,
} from 'mocha';
import sinon from 'sinon';
import getAmountPayableStatus from '../../../../app/payable/getAmountPayableStatus';
import db from '../../../../models';

const { payable: PayableModel } = db;

describe('[Unit] getAmountPayableStatus', () => {
  const getAmountPayableStatusList = {
    payables: [
      {
        status: 'paid',
        total: '488.395',
      },
      {
        status: 'waiting_funds',
        total: '96.425',
      },
    ],
  };

  const mySandBox = sinon.createSandbox();
  beforeEach(() => {
    mySandBox.stub(PayableModel, 'findAll');
  });

  afterEach(() => {
    mySandBox.restore();
  });

  it('Should list values', async () => {
    const data = {
      merchantId: 'b22024ac-c404-493d-a73f-eae7bbfd9648',
    };

    PayableModel.findAll.returns(getAmountPayableStatusList);
    const { body: payable } = await getAmountPayableStatus(data);
    assert(payable);
  });
});
