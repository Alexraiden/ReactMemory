import React from 'react';

const Button = ({onClick, children = 'delete'})=>(
	<button
		onClick = {onClick}
	>
		{children}
	</button>
);

export default Button;