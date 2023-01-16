import { Client } from '../../models/Client';
import { ClientProps } from '../../types';

interface Props {
	client_id: string;
	data: ClientProps
}

class UpdateClientService {
	async execute({client_id, data}: Props) {

		await Client.findByIdAndUpdate(client_id, { 
			name: data.name,
			email: data.email,
			telephone: data.telephone,
			cpf: data.cpf,
			address: data.address
		});

		const client = Client.findById(client_id);

		return client;
	}
}

export { UpdateClientService };