import assert from 'assert';
import {
  describe,
  it,
} from 'mocha';
import sinon from 'sinon';

import httpFactoryController from '../../../lib/common/httpFactoryController';
import { OK, INTERNAL_SERVER_ERROR } from '../../../lib/common/httpCodes';

describe('[Unit] Lib/httpFactoryController', () => {
  it('Should return success', async () => {
    const fakeReturn = {
      data: {
        pageSize: 1,
        pageNumber: 1,
        totalResults: 1,
        totalPages: 1,
        list: [
          {
            email: 'teste@teste.com.br',
            phone: '+5511981358997',
            accountId: 'a01cd679-a4e7-47d0-9a11-f9a02f8dcff0',
            name: 'teste',
          },
        ],
      },
      statusCode: OK,
    };

    const request = {
      query: {
        page: '1',
        itensPerPage: '1',
      },
      headers: {
        'x-account-id': 'a01cd679-a4e7-47d0-9a11-f9a02f8dcff0',
      },
    };
    const send = sinon.stub().returns({ request });
    const status = sinon.stub().returns({ send });
    const response = { status };

    const callbackFunction = () => fakeReturn;
    const httpControllerReturn = await httpFactoryController(callbackFunction);
    await httpControllerReturn(request, response);

    assert(status.calledWith(OK));
  });

  it('Should return error', async () => {
    const request = {
      query: {
        page: '1',
        itensPerPage: '1',
      },
      headers: {
        'x-account-id': 'a01cd679-a4e7-47d0-9a11-f9a02f8dcff0',
      },
    };
    const send = sinon.stub().returns({ request });
    const status = sinon.stub().returns({ send });
    const response = { status };

    const callbackFunction = () => {
      throw new Error('Environment not defined!');
    };

    const httpControllerReturn = await httpFactoryController(callbackFunction);
    await httpControllerReturn(request, response);
    assert(status.calledWith(INTERNAL_SERVER_ERROR));
  });
});
