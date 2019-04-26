import { Request, Response } from 'express';
import config from '../config/env';
import * as express from 'express';

import companyRoutes from './companies/company.routes';
import clientRoutes from './clients/client.routes';
import projectRoutes from './projects/project.routes';
import shiftRoutes from './shifts/shift.routes';
import userRoutes from './users/user.routes';

const router = express.Router();

/** GET /health-check - Check service health */
router.get('/health-check', (req: Request, res: Response) => res.send('OK'));

// mount routes
// router.use('/auth', authRoutes);
router.use('/companies', companyRoutes)
router.use('/clients', clientRoutes)
router.use('/projects', projectRoutes)
router.use('/shifts', shiftRoutes)
router.use('/users', userRoutes)

export default router;