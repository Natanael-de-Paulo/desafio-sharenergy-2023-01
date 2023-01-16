import { Link } from 'react-router-dom';
import { PropsWithChildren } from 'react';
import { Text } from '../Text';

interface Props{
  path: string;
  menuTitle: string;
}

export function MenuItem({path, children, menuTitle}: PropsWithChildren<Props>){
	return (
		<Link to={path}>
			<li className='flex items-center gap-2 px-4 rounded-full hover:bg-sky-400'>
				<figure>
					{ children }
				</figure>
				<Text>
					{ menuTitle }
				</Text>
			</li>
		</Link>
	);
}