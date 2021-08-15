import { Component } from 'react';

import SignalCellular4BarIcon from '@material-ui/icons/SignalCellular4Bar';
import WifiIcon from '@material-ui/icons/Wifi';
import BatteryUnknownIcon from '@material-ui/icons/BatteryUnknown';

import { connect } from 'react-redux';
import { updateTime } from '../actions';

const mapStateToProps = (state) => {
	return {
		currentTime: state.currentTime
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateTime: updateTime
	};
};

class StatusBar extends Component {
	componentDidMount = function() { 
		setInterval( function() {
			this.props.updateTime();
		}.bind(this) , 1000)};
	render() {
		return (
			<header id="app-status-bar" className="container gy-0">
				<div className="row align-items-center justify-content-between">
					<div className="col"> 
						<div className="row align-items-center justify-content-start">
							<div className="col"> <SignalCellular4BarIcon /> UK </div>
							<div className="col"> <WifiIcon /> </div>
						</div>
					</div>
					<div className="col"> 
						{ this.props.currentTime }
					</div>
					<div className="col text-end"> 
						100%
						<BatteryUnknownIcon />
					</div>
				</div>
			</header>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps())(StatusBar);