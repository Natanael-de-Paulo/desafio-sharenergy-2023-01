import { AuthForm } from '../../components/AuthForm';
import { Input } from '../../components/Input';
import { MdLockOutline, MdPersonOutline } from 'react-icons/md';
import { Container } from './styles';
import { useContextAuth } from '../../contexts/useAuth';
import { Navigate } from 'react-router-dom';

export function Login(){
	const { singIn, isAuthenticated } = useContextAuth();

	
	if(isAuthenticated == true) {
		return <Navigate to='/home' replace />;
	}
	return (
		<Container>
			<AuthForm 
				usekey={{ 
					formTitle: 'Sign In', 
					submitFormButtonText: 'Login', 
					linkDescription: ['Não possui conta?', 'Crie uma agora'],
					routeName: 'signup',
					typeSubmit: 'login'
				}} submitFormButtonAction={singIn}>
				<label htmlFor="user">
					<MdPersonOutline size={24} width={24} height={24}/>
					<Input type='text' placeholder='Insira seu login' id='user' alt='Insira seu login'/>
				</label>
				<label htmlFor="password">
					<MdLockOutline size={24} width={24} height={24}/>
					<Input type='password' placeholder='Insira sua senha' id='password' alt='Insira sua senha'/>
				</label>
			</AuthForm>
		</Container>
	);
}