import {useState, useEffect} from 'react';
import { MdOutlineSearch } from 'react-icons/md';
import { Inp } from '../../components/Input/styles';
import { ListUsers } from '../../components/ListUsers';
import { Theme } from '../../components/Theme';
import { api } from '../../services/api';
import { AuthHeader } from '../../services/authHeader';
import { Container } from './styles';

type User = {
	id: string,
	userName: string
}

type Name = {
	title: string,
	first: string,
	last: string
}

type Dob = {
	date: string,
	age: number
}

type Picture = {
	large: string,
	medium: string,
	thumbnail: string
}

export interface Users {
	user: User,
	dob: Dob
	email: string,
	name: Name,
	picture: Picture
}


export function Home(){
	const [ users, setUsers ] = useState<Users[]>([]);
	const authHeader = AuthHeader();
	useEffect(() => {
		const getUsers = async () => {
			const response = await api.get('/users', authHeader);
			console.log(response.data);
			
			setUsers(response.data);
		};

		getUsers();
	}, []);

	return (
		<Theme>
			<Container>
				<label htmlFor="search">
					<MdOutlineSearch width={24} height={24} opacity={0.6}/>
					<Inp type='text' id='search' placeholder='Pesquise um usuario aqui!'/>
				</label>

				<ListUsers users={users}/>
			</Container>
		</Theme>
	);
}