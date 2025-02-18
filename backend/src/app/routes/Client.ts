import { Router } from 'express';
import { createClient } from '../controllers/client/CreateClientController';
import { deleteClient } from '../controllers/client/DeleteClientController';
import { listClientById } from '../controllers/client/ListClientByIdController';
import { listClients } from '../controllers/client/ListClientsController';
import { updateClient } from '../controllers/client/UpdateClientController';

export const ClientRoutes = Router();

ClientRoutes
	.get('/', listClients )
	.post('/create', createClient );

ClientRoutes
	.route('/:client_id')
	.get( listClientById )
	.put( updateClient )
	.delete( deleteClient );