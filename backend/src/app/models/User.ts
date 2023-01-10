import { Schema, model } from 'mongoose';
import { UserProps } from '../types';

export const User = model<UserProps>('User', new Schema<UserProps>({
	user: {
		type: String,
		unique: true,
		required: true,
		minlength: 2
	},
	password: {
		type: String,
		required: true,
		minlength: 3  
	}
}));