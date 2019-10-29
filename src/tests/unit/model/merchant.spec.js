import assert from 'assert';
import {
  describe,
  it,
} from 'mocha';

import db from '../../../models/index';

const { merchants: MerchantModel } = db;

describe('[Unit] Model Merchant', async () => {
  const MerchantData = {
    id: 'f7c72ff4-82ff-4a5b-9dda-eb7d6b3f4513',
    name: 'Runens das Oliveiras',
    document: '909.712.890-00',
    token: 'c86av520NPFdOIiDvvJlGKKN8YjznkEW',
    expiration_date: '2019-10-31 00:00:00',
    created_at: '2019-10-31 00:00:00',
    updated_at: '2019-10-31 00:00:00',

  };

  it('1) Should validate obrigatory fields TRUE', async () => {
    const merchant = await MerchantModel.build(MerchantData);
    assert(await merchant.validate());
  });
});
