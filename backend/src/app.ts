import express from 'express';
import 'express-async-errors';
import CORS from 'cors';
import helmet from 'helmet';
import routes from './app/routes';
import { ConnectDb } from './app/database';

const app = express();

app.use(CORS());
// app.use(helmet());
app.use(express.json());

//Connection witch mongoDB 
app.use((req, res, next) => ConnectDb
	.then(() => next())
	.catch(err => next(err)));
  
app.use('/v1', routes);

export default app;