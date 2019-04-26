import * as express from 'express';
import * as validate from 'express-validation';
import { clientValidation } from '../../utils/paramValidation'
import companyCtrl from './company.controller';

const router = express.Router();

router.route('/')
  .get(companyCtrl.getCompanies)
  .post(companyCtrl.createCompany);

router.route('/:id')
  .get(companyCtrl.getById)
  .put(companyCtrl.updateById)
  .delete(companyCtrl.deleteById)

router.param('id', companyCtrl._load);

export default router;