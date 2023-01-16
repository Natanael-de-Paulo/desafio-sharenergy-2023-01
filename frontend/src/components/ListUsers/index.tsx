import { Users } from '../../pages/Home';
import { Container } from './styles';
import { MdPersonOutline, MdOutlineEmail, MdCalendarToday, MdDriveFileRenameOutline } from 'react-icons/md';


interface Props {
  users: Users[]
}

export function ListUsers ({ users }: Props) {

	return (
		<Container>
			{ users.map(data => (
				<article key={data.user.id}>
					<img src={data.picture.large} alt={`foto de ${data.name.title} ${data.name.first} ${data.name.last}`} />

					<ul>
						<li> 
							<MdDriveFileRenameOutline width={24} height={24} /> 
							<strong> Nome:</strong> 
							<span> {`${data.name.title} ${data.name.first} ${data.name.last}`}  </span>
						</li>
						<li>
							<MdPersonOutline width={24} height={24} /> 
							<strong> Usuario:</strong> 
							<span> {data.user.userName}  </span>
						</li>
						<li> 
							<MdOutlineEmail width={24} height={24}/> 
							<strong>  Email:</strong> 
							<span> { data.email } </span> 
						</li>
						<li> 
							<MdCalendarToday width={24} height={24} /> 
							<strong> Idade:</strong> 
							<span>{ data.dob.age } anos </span>
						</li>
					</ul>
				</article>
			))}
    
		</Container>
	);
}