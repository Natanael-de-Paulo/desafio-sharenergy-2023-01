import { Router } from 'express';
import { authUser } from '../controllers/security/AuthUserController';
import { createUser } from '../controllers/security/CreateUserController';

export const SecurityRoutes = Router();

SecurityRoutes
	.post('/login', authUser )
	.post('/register', createUser );