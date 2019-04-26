import * as express from 'express';
import * as validate from 'express-validation';
import { projectValidation } from '../../utils/paramValidation'
import projectCtrl from './project.controller';

const router = express.Router();

router.route('/')
  .get(projectCtrl.getProjects)
  .post(projectCtrl.createProject);

router.route('/:id')
  .get(projectCtrl.getById)
  .put(projectCtrl.updateById)
  .delete(projectCtrl.deleteById)


router.param('id', projectCtrl._load);

export default router;