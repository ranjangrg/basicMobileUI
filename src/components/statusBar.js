import { Component } from 'react';
import { connect } from 'react-redux';
import { updateTime } from '../actions';

import { appsData, defaultAppData } from '../model/constants';

import homeIcon from '../appIcons/homeIcon.svg';

// MAYBE make this a general method (module-based)
// get matching app by comparing app-id
const get_app_details_from_id = (app_id = -1) => {
	let app_detail = defaultAppData;
	for ( const curr_app_detail of appsData ) {
		if ( curr_app_detail.id === app_id ) {
			app_detail = curr_app_detail;
			break;
		}
	}
	return app_detail;
};

const mapStateToProps = (state) => {
	return {
		currentTime: state.currentTime,
		currentView: state.currentView,
		currentApp: get_app_details_from_id(state.currentAppId)
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
					<div className="col text-start"> 
						<img 
							src={ 
								this.props.currentView === 0 ?
								homeIcon :
								this.props.currentApp.icon 
							} 
							alt="app-icon" 
							/>
						{ this.props.currentView === 1 ? 
						this.props.currentApp.name :
						"Home"
						}
					</div>
					<div className="col text-end"> 
						{ this.props.currentTime }
					</div>
				</div>
			</header>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps())(StatusBar);