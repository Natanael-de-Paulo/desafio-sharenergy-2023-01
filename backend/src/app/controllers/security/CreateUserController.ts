import { Response, Request } from 'express';
import { CreateUserService } from '../../services/security/CreateUserService';
import { UserProps } from '../../types';

class CreateUserController {
	async handle(req: Request, res: Response){
		const { user, password }: UserProps = req.body;
		const userData = {
			user,
			password
		};

		const createUserService = new CreateUserService();
		const newUser = await createUserService.execute(userData);
    
		res.status(201).json(newUser);
	}
}


export const createUser = new CreateUserController().handle;