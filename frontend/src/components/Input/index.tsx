import { InputHTMLAttributes } from 'react';
import { Inp } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export function Input(props : InputProps) {
	return (
		<Inp {...props}/>
	);
}

