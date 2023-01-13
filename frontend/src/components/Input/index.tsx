import { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
}

export function Input(props : InputProps) {
	return (
		<input {...props}/>
	);
}

