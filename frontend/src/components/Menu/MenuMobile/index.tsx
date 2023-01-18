import { MdClose } from 'react-icons/md';
import { MenuItem } from '../../MenuItem';
import { ButtonIconMenu } from '../ButtonIconMenu';
import { ContainerMenuMobile } from './styles';

interface Props {
  active: boolean;
  showMenu: () => void;
}

export function MenuMobile({ active, showMenu }: Props){
	return (
		<>
			{	
				active && 
					<ContainerMenuMobile>
						<div>
							<ButtonIconMenu showMenu={showMenu}>
								<MdClose size={32} />
							</ButtonIconMenu>
						</div>

						
						<ul>
							<MenuItem menuTitle="Home" path="/">	
							</MenuItem>
							<MenuItem menuTitle="HTTP Cat" path="/home">	
							</MenuItem>
							<MenuItem menuTitle="Random Dog" path='/ramdom-dog'>
							</MenuItem>
							<MenuItem menuTitle="Client Crud" path='/profile'>
							</MenuItem>
						</ul>
						
					</ContainerMenuMobile>
			}
		</>
	);
}