import { MdOutlineHome } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { MenuItem } from '../MenuItem';

export function Menu(){
	return (
		<nav>
			<Link to='/home' className='logo'>
				<MdOutlineHome size={24} width={24}/>
				<span>
					Home	
				</span> 
			</Link>
	
			<ul className='flex flex-col gap-4'>
				<MenuItem menuTitle="HTTP Cat" path="/home">	
				</MenuItem>
				<MenuItem menuTitle="Random Dog" path='/'>
				</MenuItem>
				<MenuItem menuTitle="Client Crud" path='/profile'>
				</MenuItem>
			</ul>
		</nav>
	);
}