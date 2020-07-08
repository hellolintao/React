import React, {Component} from 'react';

export default class Button extends Component {
	constructor(props) {
		super(props);
		console.log('B constructor');
		this.state = {
			type: 'hello'
		};
	}

	render () {
		console.log('B render');
		const { button } = this.props;
		return (
			<button>{button}--{this.state.type}</button>
		);
	}
	componentWillMount() {
		console.log('B componentWillMount');
	}

	componentDidMount() {
		console.log('B componentDidMount');
		setTimeout(() => {
			this.setState({
				type: 'hahah'
			});
		}, 3000);
	}

	componentWillReceiveProps(nextProps) {
		console.log('B1 componentWillReceiveProps', nextProps);
		// this.setState({
		// 	type: 'world'
		// });
	}

	shouldComponentUpdate(nextProps, nextState) {
		console.log('B2 shouldComponentUpdate', nextProps, nextState);
		return true;
	}

	componentWillUpdate (nextProps, nextState) {
		console.log('B3 componentWillUpdate', nextProps, nextState);
	}

	componentDidUpdate() {
		console.log('B4 componentDidUpdate');
		console.log('-------------');
	}
}