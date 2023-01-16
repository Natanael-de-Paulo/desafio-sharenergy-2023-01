import { Heading } from '../Heading';
import { MdOutlineSearch} from 'react-icons/md';

import { PropsWithChildren } from 'react';
import { Container } from './styles';
import { Menu } from '../Menu';
import { Inp } from '../Input/styles';

export function Theme({ children }: PropsWithChildren){
	return (
		<Container>
			<Heading asChild={true}>
				<header>
					<Menu />
				</header>
			</Heading>

			{ children }
			
		</Container>
	);
}