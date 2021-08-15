import { Component } from 'react';

const fruit_list = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

// this cache variable will store component state
// on 'unmount' and restores component state 
// on 'mount' again
// Maybe, find a better cache/state solution ??
let clock_app_state_cache = {
	idx: 0
};

class ClockApp extends Component {
	constructor(props) {
		super(props);
		this.state = clock_app_state_cache; // load from cache
	}
	componentDidMount = () => {
		// load state from cache on mount
		this.setState({
			idx: clock_app_state_cache.idx
		});
	};
	componentWillUnmount = () => {
		// save state to cache on unmount
		clock_app_state_cache = this.state;
	};
	change_idx = () => {
		this.setState({
			idx: (this.state.idx + 1) % fruit_list.length
		});
	};
	render() {
		return (<div>
			<h1> Clock App </h1>
			<p> 
				Here is supposed to be a clock app GUI.
				Not implemented yet. But you get the idea.
			</p>
			<button onClick={ () => this.change_idx() }> Change Fruit </button>
			<p>
				Fruit: { fruit_list[this.state.idx] }
			</p>
		</div>);
	};
}

export default ClockApp;