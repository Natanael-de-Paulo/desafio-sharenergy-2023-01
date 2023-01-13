import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface HeadingProps {
  children: ReactNode;
  asChild?: boolean;
}

export function Header({children, asChild} : HeadingProps){
	const Comp = asChild ? Slot : 'h2';

	return (
		<Comp>
			{ children }
		</Comp>
	);
}