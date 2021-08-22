import { Component } from 'react';

class DefaultApp extends Component {
	render() {
		return (<div>
			<h1> Unknown App </h1>
			<div className="text-start px-3">
				App not loading possibly because of one/more 
				of the following reasons:
				<ul>
					<li> App doesn't exist </li>
					<li> App isn't configured properly </li>
				</ul>
				<div className="test-class"> Hello this is a test </div>
			</div>
		</div>);
	};
}

export default DefaultApp;