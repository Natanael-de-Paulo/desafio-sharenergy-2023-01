import {Request, Response} from 'express';
import { BadRequestException } from '../../../shared/errors/BadRequestException';
import { ListClientByIdService } from '../../services/client/ListClientByIdService';

class ListClientByIdController {
	async handle(req: Request, res: Response){
		try {
			const { client_id } = req.params;
			const listClientByIdService = new ListClientByIdService();
			const client = await listClientByIdService.execute(client_id);

			if(!client) throw new BadRequestException('Customer does not exist');

			res.json(client);
		} catch (error) {
			res.send(error);
		}
	}
}

export const ListClientById = new ListClientByIdController().handle;