import * as express from 'express';
import * as validate from 'express-validation';
import { userValidation } from '../../utils/paramValidation'
import userCtrl from './user.controller';

const router = express.Router();

router.route('/')
  .get(userCtrl.getEmployees)
  .post(userCtrl.createEmployee)

router.route('/login')
  .post(userCtrl.login)

router.route('/register')
  .post(userCtrl.register)

router.route('/:id')
  .get(userCtrl.getById)
  .put(userCtrl.updateById)
  .delete(userCtrl.deleteById)

router.param('id', userCtrl._load);

export default router;