import { compare } from 'bcrypt';
import { NextFunction } from 'connect';
import { Request, Response } from 'express';
import { BadRequestException } from '../../../shared/errors/BadRequestException';
import { User } from '../../models/User';
import { AuthUserService } from '../../services/security/AuthUserService';
import { UserProps } from '../../types';

class AuthUserController {
	async handle(req: Request, res: Response) {
		const { user, password, email }: UserProps = req.body;
		const authUserService = new AuthUserService();
	
		const userData = await User.findOne({ 
			$or: [
				{ email: email }, 
				{ user: user }
			]
		});
			
		if (!userData) throw new BadRequestException('User or password is incorrect!');
		const passwordMatch = await compare(password, userData.password);
		if (!passwordMatch) throw new BadRequestException('User or password is incorrect!');
	
		const auth = await authUserService.execute(userData);
	
		return res.json(auth);
	}
}

export const authUser = new AuthUserController().handle;