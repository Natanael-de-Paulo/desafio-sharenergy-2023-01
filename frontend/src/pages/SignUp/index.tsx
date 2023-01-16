import { MdLockOutline, MdPersonOutline, MdOutlineMail } from 'react-icons/md';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthForm } from '../../components/AuthForm';
import { Input } from '../../components/Input';
import { useContextAuth } from '../../contexts/useAuth';
import { api } from '../../services/api';
import { Container } from './styles';

export function SignUp(){
	const { isAuthenticated } = useContextAuth();
	const navigate = useNavigate();

  
	if(isAuthenticated == true) {
		return <Navigate to='/home' replace />;
	}

	const handleRegisterUser = async (email: string, user: string, password: string) => {
		try {
			await api.post('/security/register', {
				email,
				user,
				password
			});

			navigate('/');
		} catch (error) {
			console.error(error);
			alert('Erro na criação de usuario');
      
		}
	};

	return (
		<Container>
			<AuthForm 
				usekey={{ 
					formTitle: 'Sign Up', 
					submitFormButtonText: 'Criar Conta', 
					linkDescription: ['Já possui conta?', 'Entre agora!'],
					routeName: '/',
					typeSubmit: 'createAccount'
				}}  submitFormButtonAction={handleRegisterUser}>
				<label htmlFor="email">
					<MdOutlineMail size={24} width={24} height={24}/>
					<Input type='email' placeholder='Insira seu email' id='email' alt='Insira seu email'/>
				</label>
				<label htmlFor="user">
					<MdPersonOutline size={24} width={24} height={24}/>
					<Input type='text' placeholder='Insira seu login' id='user' alt='Insira seu login'/>
				</label>
				<label htmlFor="password">
					<MdLockOutline size={24} width={24} height={24}/>
					<Input type='password' placeholder='Insira sua senha' id='password' alt='Insira seu login'/>
				</label>
			</AuthForm>
		</Container>
	);
}