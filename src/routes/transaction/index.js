import httpFactoryController from '../../lib/common/httpFactoryController';
import { validateTokenMerchant, validateCardBrand } from '../../middlewares';


import {
  createTransaction,
  getTransaction,
} from '../../app/transaction';

export default (router) => {
  router.post('/', validateCardBrand, validateTokenMerchant, httpFactoryController(createTransaction));
  router.get('/', validateTokenMerchant, httpFactoryController(getTransaction));
};
