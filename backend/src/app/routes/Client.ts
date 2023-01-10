import { Router } from 'express';
import { createClient } from '../controllers/client/CreateClientController';

export const ClientRoutes = Router();

ClientRoutes
	.post('/create', createClient );