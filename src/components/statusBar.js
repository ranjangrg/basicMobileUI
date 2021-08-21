import { Component } from 'react';
import { connect } from 'react-redux';
import { updateTime } from '../actions';

import { getThemeClass, getAppDetailsFromId } from '../modules/globalFunctions';

import homeIcon from '../appIcons/homeIcon.svg';

const mapStateToProps = (state) => {
	return {
		currentTime: state.currentTime,
		currentView: state.currentView,
		currentApp: getAppDetailsFromId(state.currentAppId),
		currentTheme: state.currentTheme
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
			<header id="app-status-bar" className={ "container gy-0 " + getThemeClass(this.props.currentTheme) }>
				<div className="row align-items-center justify-content-between">
					<div className="col text-start"> 
						<img 
							src={ 
								(this.props.currentView === 0) ?
								homeIcon : this.props.currentApp.icon 
							} 
							alt="app-icon" 
						/>
						{ 
							(this.props.currentView === 1) ? 
							this.props.currentApp.name : "Home"
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