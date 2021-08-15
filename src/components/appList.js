import { Component } from 'react';
import logo from '../logo.svg';
// import settingsIcon from '../settingsIcon.svg';
// import appClockIcon from '../appClockIcon.svg';
import defaultAppIcon from '../defaultAppIcon.svg';
// credit: https://icons8.com/icons/set/settings

import { connect } from 'react-redux';
import { openApp, changeView } from '../actions';

import { views, appsData } from '../model/constants';

const mapStateToProps = (state) => {
	return {
		currentAppId: state.currentAppId,
		currentView: state.currentView
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		openApp: openApp,
		changeView: changeView
	};
};

class AppList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			card_width: "6rem"
		};
	}
	create_card = (app_name, _logo = logo) => {
		const card_style = { 
			width: this.state.card_width,
			maxWidth: this.state.card_width,
			border: "none",
  			cursor: "pointer"
		};
		return (
		<div className="card text-center" style={ card_style } >
			<img src={_logo} className="card-img-top" alt="app-icon" style={ card_style } />
			<p> { app_name } </p> 
		</div>);
	};
	open_app_wrapper = (app_detail) => {
		this.props.openApp(app_detail.id);
		this.props.changeView(views.APP_VIEW);
	};
	render() {
		const app_list_combined = appsData.map( (app_detail) => {
			const app_icon = app_detail.icon !== undefined ? app_detail.icon : defaultAppIcon;
			return (<div 
				className="col" 
				style={ { maxWidth: this.state.card_width } }
				onClick={ () => this.open_app_wrapper(app_detail) }
				key={"card-col-"+app_detail.id}> 
				{this.create_card(app_detail.name, app_icon)} 
			</div>);
		} );
		return (<div id="app-applist" className="container">
			<div className="row justify-content-start">
				{ app_list_combined }
			</div>
		</div>);
	}
}

export default connect(mapStateToProps, mapDispatchToProps())(AppList);