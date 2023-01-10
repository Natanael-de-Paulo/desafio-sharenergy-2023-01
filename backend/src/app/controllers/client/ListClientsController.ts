import {Request, Response} from 'express';
import { BadRequestException } from '../../../shared/errors/BadRequestException';
import { ListClientsService } from '../../services/client/ListClientsService';


class ListClientsController {
	async handle(req: Request, res: Response){
		try {
			const listClientsService = new ListClientsService();
			const clients = await listClientsService.execute();

			if(!clients) throw new BadRequestException('No registered customers');

			res.json(clients);
		} catch (error) {
			res.send(error);
		}
	}
}

export const listClients = new ListClientsController().handle;