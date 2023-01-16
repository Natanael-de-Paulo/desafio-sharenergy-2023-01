import { Response, Request } from 'express';
import { BadRequestException } from '../../../shared/errors/BadRequestException';
import { User } from '../../models/User';
import { CreateUserService } from '../../services/security/CreateUserService';
import { UserProps } from '../../types';

class CreateUserController {
	async handle(req: Request, res: Response){
		try {
			const { user, password, email }: UserProps = req.body;

			const userData = {
				user,
				password,
				email
			};

			if (!userData.user) throw new BadRequestException('User is required!');
			if (!userData.email) throw new BadRequestException('Email is required!');
			if (!userData.password) throw new BadRequestException('Password is required!');

			const userAlreadyExists = await User.findOne({ 
				$or: [{ email: userData.email }, { user: userData.user }]
			});

			if (userAlreadyExists) throw new BadRequestException('User already exists!');

			const createUserService = new CreateUserService();
			const newUser = await createUserService.execute(userData);
    
			res.status(201).json(newUser);
		} catch (error) {
			console.error(error);
			res.send(error);
		}
	}
}


export const createUser = new CreateUserController().handle;