import { Client } from '../../models/Client';
import { ClientProps } from '../../types';

class DeleteClientService {
	async execute(client: ClientProps){
		const GetClienteById = Client.findOneAndDelete({cpf: client.cpf});
		return GetClienteById;
	}
}

export { DeleteClientService };