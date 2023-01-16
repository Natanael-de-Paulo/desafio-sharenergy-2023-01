import { MdOutlineHome, MdOutlineMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { MenuItem } from '../MenuItem';
import { MenuMobile, NavContainer } from './styles';

export function Menu(){

	return (
		<NavContainer>
			<Link to='/home' className='logo'>
				<MdOutlineHome size={24} width={24}/>
				<span>
					Home	
				</span> 
			</Link>
	
			{/* <ul className='flex flex-col gap-4'>
				<MenuItem menuTitle="HTTP Cat" path="/home">	
				</MenuItem>
				<MenuItem menuTitle="Random Dog" path='/'>
				</MenuItem>
				<MenuItem menuTitle="Client Crud" path='/profile'>
				</MenuItem>
			</ul> */}

			<MenuMobile >
				<MdOutlineMenu size={24}/>
			</MenuMobile>
		</NavContainer>
	);
}