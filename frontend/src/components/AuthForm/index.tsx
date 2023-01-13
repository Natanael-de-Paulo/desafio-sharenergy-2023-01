import { ReactNode } from 'react';
import { FormContainer } from './styles';

interface AuthFormProps{
  children: ReactNode;
}

export function AuthForm({children}: AuthFormProps){
	return (
		<FormContainer>
			{ children }
		</FormContainer>
	);
}