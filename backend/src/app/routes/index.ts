import { Router } from 'express';
import { SecurityRoutes } from './Security';

const routes = Router();

routes.use('/security', SecurityRoutes);


export default routes;