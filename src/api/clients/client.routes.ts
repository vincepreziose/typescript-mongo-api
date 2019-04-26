import * as express from 'express';
import * as validate from 'express-validation';
import { clientValidation } from '../../utils/paramValidation'
import clientCtrl from './client.controller';

const router = express.Router();

router.route('/')
  .get(clientCtrl.getClients)
  .post(clientCtrl.createClient);

router.route('/:id')
  .get(clientCtrl.getById)
  .put(clientCtrl.updateById)
  .delete(clientCtrl.deleteById)

router.param('id', clientCtrl._load);

export default router;