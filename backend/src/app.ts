import express from 'express';
import CORS from 'cors';
import helmet from 'helmet';

const app = express();

app.use(CORS());
app.use(helmet());
app.use(express.json());


export default app;