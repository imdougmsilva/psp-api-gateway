import httpFactoryController from '../../lib/common/httpFactoryController';
import { validateTokenMerchant } from '../../middlewares';


import {
  getAmountPayableStatus,
} from '../../app/payable';

export default (router) => {
  router.get('/', validateTokenMerchant, httpFactoryController(getAmountPayableStatus));
};
