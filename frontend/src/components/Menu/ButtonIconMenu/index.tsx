import { PropsWithChildren } from 'react';
import { ButtonIcon } from './styles';

interface Props{
  showMenu: () => void
}

export function ButtonIconMenu({children, showMenu}: PropsWithChildren<Props>){
	return(
		<ButtonIcon onClick={showMenu}>
			{ children }
		</ButtonIcon>
	);
}