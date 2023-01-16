import { Router } from 'express';
import { listUsers } from '../controllers/RandomUserGenerator/ListUsersController';

export const RandomUserRoutes = Router();

RandomUserRoutes
	.get('/', listUsers );