import { Router } from 'express';
import { createClient } from '../controllers/client/CreateClientController';
import { listClients } from '../controllers/client/ListClientsController';

export const ClientRoutes = Router();

ClientRoutes
	.get('/', listClients )
	.post('/create', createClient );