import { InputHTMLAttributes } from 'react';
import { Inp } from './styles';

type InputProps =  InputHTMLAttributes<HTMLInputElement> 

export function Input(props : InputProps) {
	return (
		<Inp {...props}/>
	);
}

