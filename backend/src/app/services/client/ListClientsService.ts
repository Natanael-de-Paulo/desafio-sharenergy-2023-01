import {Request, Response} from 'express';
import { Client } from '../../models/Client';


class ListClientsService {
	async execute(){		
		return Client.find({});
	}
}

export { ListClientsService };