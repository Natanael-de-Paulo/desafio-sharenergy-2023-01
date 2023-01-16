import {Request, Response} from 'express';
import { BadRequestException } from '../../../shared/errors/BadRequestException';
import { Client } from '../../models/Client';
import { UpdateClientService } from '../../services/client/UpdateClientService';
import { ClientProps } from '../../types';

class UpdateClientController {
	async handle(req: Request, res: Response){
		try {
			const { client_id } = req.params;
			const data: ClientProps = req.body;

			const client = await Client.findById(client_id);
			if(!client) throw new BadRequestException('Customer does not exist');
		
			const updateClientService = new UpdateClientService();
			const updatedClient = await updateClientService.execute({client_id, data});

			if(!client) throw new BadRequestException('Customer does not exist');

			res.json(updatedClient);
		} catch (error) {
			res.send(error);
		}
	}
}

export const updateClient = new UpdateClientController().handle;