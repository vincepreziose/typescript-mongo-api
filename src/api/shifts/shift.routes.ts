import * as express from 'express';
import * as validate from 'express-validation';
import { shiftValidation } from '../../utils/paramValidation'
import shiftCtrl from './shift.controller';

const router = express.Router();

router.route('/')
  .get(shiftCtrl.getShifts)
  .post(shiftCtrl.createShift);

router.route('/:id')
  .get(shiftCtrl.getById)
  .put(shiftCtrl.updateById)
  .delete(shiftCtrl.deleteById)

router.param('id', shiftCtrl._load);

export default router;