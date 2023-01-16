import {useState, useEffect} from 'react';
import { ListUsers } from '../../components/ListUsers';
import { Theme } from '../../components/Theme';
import { api } from '../../services/api';
import { AuthHeader } from '../../services/authHeader';

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
		<>
			<Theme>
				<ListUsers users={users}/>
			</Theme>
		</>
	);
}