import { Request, Response } from 'express';
import { BadRequestException } from '../../../shared/errors/BadRequestException';
import { Client } from '../../models/Client';
import { CreateClientService } from '../../services/client/CreateClientService';

import { ClientProps } from '../../types';

class CreateClientController {
	async handle(req: Request, res: Response) {
		try {
			const client: ClientProps = req.body;

			const existClient = await Client.findOne({
				$or: [
					{ email: client.email },
					{ cpf: client.cpf },
					{ name: client.name },
				]
			});

			if(existClient) throw new BadRequestException('Client already');

			const createClientService = new CreateClientService();
			const newClient = await createClientService.execute(client);
			res.json(newClient);
		} catch (error) {
			res.send(error);
		}
	}
}

export const createClient = new CreateClientController().handle;