import { Router } from 'express';
import { isAuthenticated } from '../../shared/middlewares/isAuthenticated';
import { ClientRoutes } from './Client';
import { SecurityRoutes } from './Security';

const routes = Router();

routes.use('/security', SecurityRoutes);
routes.use('/client', isAuthenticated, ClientRoutes );

export default routes;