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
				<div className='container-header'>
					<header>
						<Menu />
						<label htmlFor="search">
							<MdOutlineSearch width={24} height={24} opacity={0.6}/>
							<Inp type='text' id='search'/>
						</label>
					</header>
				</div>
			</Heading>

			{ children }
			
		</Container>
	);
}