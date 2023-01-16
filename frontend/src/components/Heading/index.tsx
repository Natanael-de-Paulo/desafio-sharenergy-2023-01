import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

export interface HeadingProps {
  children: ReactNode;
  asChild?: boolean;
	
}

export function Heading({ children, asChild} : HeadingProps){
	const Comp = asChild? Slot : 'h1';

	return (
		<Comp>
			{ children }
		</Comp>
	);
}