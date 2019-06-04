import React from 'react';

export default ({onChange, value, children}) =>(
	<form>
		{children}
		<input 
			type="text"
			value = {value}
			onChange={onChange}
		/>
	</form>
);

//export default Search;