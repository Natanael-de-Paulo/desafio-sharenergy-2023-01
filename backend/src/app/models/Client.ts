import { Schema, model } from 'mongoose';
import { ClientProps, Address } from '../types';

export const Client = model<ClientProps>('Client', new Schema<ClientProps>({
	name: {
		type: String,
		unique: true,
		required: true,
		minlength: 2
	},
	email: {
		type: String,
		required: true,
		minlength: 3  
	},
	telephone: {
		type: String,
		require: true
	},
	cpf: {
		type: String,
		required: true
	},
	address: {
		type: {} as Address
	}
}));