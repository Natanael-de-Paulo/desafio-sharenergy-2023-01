import { useState } from 'react';
import { MdOutlineHome, MdOutlineMenu } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { MenuItem } from '../MenuItem';
import { ButtonIconMenu } from './ButtonIconMenu';
import { MenuMobile } from './MenuMobile';
import { NavContainer } from './styles';

export function Menu(){

	const [active, setActive] = useState(false);

	const showMenu = () => {
		setActive(!active);
	};

	return (
		<NavContainer>
			<Link to='/home' className='logo'>
				<MdOutlineHome size={24} width={24}/>
				<span>
					Home	
				</span> 
			</Link>
	
			<ul className='itemsDesktop'>
				<MenuItem menuTitle="HTTP Cat" path="/http-cat">	
				</MenuItem>
				<MenuItem menuTitle="Random Dog" path='/ramdom-dog'>
				</MenuItem>
				<MenuItem menuTitle="Client Crud" path='/profile'>
				</MenuItem>
			</ul>

			<ButtonIconMenu showMenu={showMenu}>
				<MdOutlineMenu size={24}/>
			</ButtonIconMenu>


			<MenuMobile active={active} showMenu={showMenu}/>
			
		</NavContainer>
	);
}