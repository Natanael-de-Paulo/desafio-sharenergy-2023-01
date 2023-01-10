import { Router } from 'express';
import { createUser } from '../controllers/security/CreateUserController';

export const SecurityRoutes = Router();

SecurityRoutes
	// .post('/login', authUserController.handle )
	.post('/register', createUser );