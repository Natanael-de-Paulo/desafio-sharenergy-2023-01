import { AuthForm } from '../../components/AuthForm';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Row, Container } from './styles';

export function Login(){
	return (
		<Container>
			<AuthForm>
				<Header>
					Sign In
				</Header>
				
				<Row>
					<label htmlFor="user">
						<Input type='text' placeholder='Insira seu login' id='user'/>
					</label>
					<label htmlFor="password">
						<Input type='password' placeholder='Insira sua senha' id='password'/>
					</label>
					<Button>
						Logar
					</Button>
				</Row>
			</AuthForm>
		</Container>
	);
}