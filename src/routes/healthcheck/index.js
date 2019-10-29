import { OK, METHOD_NOT_ALLOWED } from '../../lib/common/httpCodes';

export default (router) => {
  router.get('/', (req, res) => {
    res.status(OK).send({ live: true });
  });

  router.post('/', (req, res) => {
    res.status(METHOD_NOT_ALLOWED).send();
  });
};
