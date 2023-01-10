import bcrypt from 'bcrypt';
import { User } from '../../models/User';
import { UserProps } from '../../types';

class CreateUserService {
	async execute({ user, password }: UserProps){
		const passwordHash = await bcrypt.hash(password, 10);

		const userCreated = await User.create({
			user,
			password: passwordHash
		});

		return userCreated;
	}
}


export { CreateUserService };