import { Client } from '../../models/Client';

class ListClientByIdService {
	async execute(client_id: string){
		const GetClienteById = Client.findById(client_id);
		return GetClienteById;
	}
}

export { ListClientByIdService };