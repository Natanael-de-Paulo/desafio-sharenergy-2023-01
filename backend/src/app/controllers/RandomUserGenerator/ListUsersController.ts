import { Request, Response } from 'express'; 
import { ListUsersService } from '../../services/RandomUserGenerator/ListUsersService';

class ListUsersController{
	async handle(req: Request, res: Response){
		const listUsersService = new ListUsersService();
		const users = await listUsersService.execute();

		res.json(users);
	}
}

export const listUsers = new ListUsersController().handle;