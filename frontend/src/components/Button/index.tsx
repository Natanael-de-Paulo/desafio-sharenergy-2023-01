import { ReactNode } from 'react';
import { Btn } from './styles';

interface ButtonProps{
  children: ReactNode;
}

export function Button({children}: ButtonProps){
	return(
		<Btn>
			{ children }
		</Btn>
	);
}