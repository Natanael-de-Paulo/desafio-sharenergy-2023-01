import { Router } from 'express';
import { createClient } from '../controllers/client/CreateClientController';
import { ListClientById } from '../controllers/client/ListClientByIdController';
import { listClients } from '../controllers/client/ListClientsController';

export const ClientRoutes = Router();

ClientRoutes
	.get('/', listClients )
	.get('/:client_id', ListClientById)
	.post('/create', createClient );