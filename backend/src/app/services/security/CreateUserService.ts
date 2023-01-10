import { Response, Request } from 'express';
import { User } from '../../models/User';
import { UserProps } from '../../types';

class CreateUserService {
	async execute({ user, password }: UserProps){
		const userCreated = await User.create({
			user,
			password
		});
		
		return userCreated;
	}
}


export { CreateUserService };