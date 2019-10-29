import { OK } from '../lib/common/httpCodes';

export default (router) => {
  router.get('/', (req, res) => {
    res.status(OK).send({ message: 'I\'m Gateway PSP!' });
  });
};
