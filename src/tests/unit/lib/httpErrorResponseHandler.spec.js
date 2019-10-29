import assert from 'assert';
import {
  describe,
  it,
} from 'mocha';

import httpErrorResponseHandler from '../../../lib/common/httpErrorResponseHandler';
import { INTERNAL_SERVER_ERROR } from '../../../lib/common/httpCodes';

describe('[Unit] Lib/httpResponseHandler', () => {
  it('Should return error content', () => {
    const dataResponse = { data: 'some content' };
    const returnContent = httpErrorResponseHandler(dataResponse);
    assert(returnContent.statusCode === INTERNAL_SERVER_ERROR);
  });
});
