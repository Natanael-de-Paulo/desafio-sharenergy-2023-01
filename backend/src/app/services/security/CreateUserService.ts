import bcrypt from 'bcrypt';
import { User } from '../../models/User';
import { UserProps } from '../../types';

class CreateUserService {
	async execute({ user, password, email }: UserProps){
		const passwordHash = await bcrypt.hash(password, 10);

		const userCreated = await User.create({
			user,
			password: passwordHash,
			email
		});
		
		return User.findOne({email: userCreated.email}, { password: false});
	}
}


export { CreateUserService };