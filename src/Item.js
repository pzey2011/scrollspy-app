import React from 'react';
export const Item =(props)=> {
	
	return (
		<section className={props.selected ? "blue" : ""}>
			{props.content}
		</section>
	);
};