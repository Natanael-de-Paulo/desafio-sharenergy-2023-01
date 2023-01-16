import { ReactNode } from 'react';
import { Slot } from '@radix-ui/react-slot';

interface TextProps{
  isChild?: boolean;
  children: ReactNode;
}

export function Text({ isChild, children }: TextProps){
	const Comp = isChild? Slot : 'span';
  
	return (
		<Comp>
			{ children }
		</Comp>
	);
}