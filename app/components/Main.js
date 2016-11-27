import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

export default class Main extends Component {
	render() {
		return (
			<div>
				<Header />
				{React.cloneElement(this.props.children, {key:this.props.location.pathname})}
				<Footer />
			</div>
		);
	}
}
