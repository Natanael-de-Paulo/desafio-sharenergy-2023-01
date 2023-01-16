import { Client } from '../../models/Client';
import { ClientProps } from '../../types';

class CreateClientService {
	async execute(client: ClientProps) {
		const createClient = await Client.create(client);
		return createClient;
	}
}

export { CreateClientService };