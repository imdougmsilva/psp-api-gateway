import assert from 'assert';
import {
  describe,
  it,
} from 'mocha';

import httpResponseHandler from '../../../lib/common/httpResponseHandler';
import { OK } from '../../../lib/common/httpCodes';

describe('[Unit] Lib/httpResponseHandler', () => {
  it('Should return content', () => {
    const dataResponse = { data: 'some content' };
    const returnContent = httpResponseHandler(dataResponse, OK);
    assert(returnContent.statusCode === OK);
  });
});
