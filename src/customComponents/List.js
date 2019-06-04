import React from 'react';
import Button from './listButton';

const List = ({list, searchTerm, searchFunction, deleteFunction}) =>(
	<div>
		{list.filter(searchFunction(searchTerm)).map((item)=>{

			const {objectID, url, author, title}= item;

			return(
				<div key = {objectID} >
					<a href={url}>{title} </a>
					<span>{author} </span>
					<span>{objectID}</span>
					<span>
						<Button 
							onClick = {() => deleteFunction(objectID)} //don't forget to bind onDismiss function
							type="button"
						>
							delete2
						</Button>
						
					</span>
				</div>
			)
		})
		}
	</div>
);

export default List;