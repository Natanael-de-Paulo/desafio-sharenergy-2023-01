import { ReactNode, FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Heading } from '../Heading';
import { Text } from '../Text';
import { Button, Container, FormContainer, Wrapper } from './styles';

type AuthFormProps = {
	formTitle: string,
	submitFormButtonText: string,
	linkDescription: string[],
	routeName: string,
	typeSubmit: string
}

interface FormArgProps{
	usekey: AuthFormProps;
	children: ReactNode;
	submitFormButtonAction: (...credentials: string[]) => Promise<void>
}

interface FormElements extends HTMLFormControlsCollection{
	email: HTMLInputElement;
	user: HTMLInputElement;
	password: HTMLInputElement;
}

interface FormElement extends HTMLFormElement{
	readonly elements: FormElements;
}

export function AuthForm({ usekey, children, submitFormButtonAction } : FormArgProps){

	const handleSubmit = (event: FormEvent<FormElement>) => {
		
		event.preventDefault();
		const form = event.currentTarget;
		const { email, user, password } = form.elements;
		
		
		if(usekey.typeSubmit === 'createAccount') submitFormButtonAction(email.value, user.value, password.value);
		if(usekey.typeSubmit === 'login') submitFormButtonAction(user.value, password.value);
	};


	return (
		<Container>
			<Heading>
				{ usekey.formTitle }
			</Heading>
			<FormContainer onSubmit={handleSubmit}>
				<Wrapper>

					{ children }

					<Button type='submit'>
						{ usekey.submitFormButtonText }	
					</Button>
				</Wrapper>
			</FormContainer>
			<footer>
				<Text>
					{ usekey.linkDescription[0] } <Link to={ usekey.routeName } className='underline'>{ usekey.linkDescription.slice(1)}!</Link>
				</Text>
			</footer>
		</Container>
	);
}