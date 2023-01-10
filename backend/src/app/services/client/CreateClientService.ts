import { Client } from '../../models/Client';
import { ClientProps } from '../../types';

class CreateClientService {
	async execute(client: ClientProps) {
		const createClient = Client.create(client);
		return createClient;
	}
}

export { CreateClientService };