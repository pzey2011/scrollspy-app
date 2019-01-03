import React from 'react';
export const Item =(props)=> {
	
	return (
		<section ref={props.refs} id={"item-"+props.id} className={props.selected ? "blue" : ""}>
			{props.content}
		</section>
	);
};