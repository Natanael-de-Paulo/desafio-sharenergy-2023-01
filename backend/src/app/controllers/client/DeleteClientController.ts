import {Request, Response} from 'express';
import { BadRequestException } from '../../../shared/errors/BadRequestException';
import { Client } from '../../models/Client';
import { DeleteClientService } from '../../services/client/DeleteClientService';


class DeleteClientController {
	async handle(req: Request, res: Response){
		try {
			const { client_id } = req.params;
			const client = await Client.findById(client_id);

			if(!client) throw new BadRequestException('Customer does not exist');
			
			const deleteClientService = new DeleteClientService();
			const deletedClient = await deleteClientService.execute(client);

			res.json(deletedClient);
		} catch (error) {
			res.send(error);
		}
	}
}

export const deleteClient = new DeleteClientController().handle;