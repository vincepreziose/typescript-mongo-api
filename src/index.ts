import * as express from 'express';
import * as compression from 'compression';
import * as cors from 'cors';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as dotenv from 'dotenv';
import * as helmet from 'helmet';
import * as expressValidation from 'express-validation';
import * as path from 'path';

import apiRoutes from './api';
import { dbInit } from './config/db';
import { authError, genericError, mongooseError, validationError } from './utils/error-handlers';

// Load environment variables
dotenv.config({ path: '.env' });
/* set global validation options */
expressValidation.options({
  allowUnknownBody: false,
  allowUnknownQuery: false,
  allowUnknownParams: false,
});

const ENV = process.env.NODE_ENV || 'development';
const PORT: number = process.env.PORT ? Number.parseInt(process.env.PORT!) : 3001;

dbInit(process.env);

// Configure express server
const app = express()
  .set('port', PORT)
  .use(helmet())
  .use(compression())
  .use(cors())
  .use(logger('short'))
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use('/api/v1', apiRoutes)
  .use(authError)
  .use(validationError)
  .use(mongooseError)
  .use(genericError);

// Start server
app.listen(app.get('port'), () => {
  console.info(('  App is running at http://localhost:%d in %s mode'), app.get('port'), app.get('env'));
});

export default app;
