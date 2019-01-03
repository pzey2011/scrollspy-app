import React, { Component } from 'react';
class Item extends Component {
	constructor() {
		super();
		this.state = {


		};

	}
	render () {
		return (
			<section ref={this.props.refs} id={"item-"+this.props.id} className={this.props.selected ? "blue" : ""}>
				{this.props.content}
			</section>
		);
	}
}

export default Item;
