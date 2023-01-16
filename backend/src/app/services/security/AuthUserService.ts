import * as jwt from 'jsonwebtoken';
import { Types } from 'mongoose';

interface AuthRequest {
	_id: Types.ObjectId;
	user: string;
	email: string;
}

class AuthUserService {
	async execute( userData : AuthRequest) {

		const user = {
			user: userData.user,
			user_email: userData.email
		};
		const token = jwt.sign(
			user,
			String(process.env.JWT_SECRET),
			{
				subject: String(userData._id),
				expiresIn: '30d',
			}
		);
  
		return {token};
	}
}

export { AuthUserService };