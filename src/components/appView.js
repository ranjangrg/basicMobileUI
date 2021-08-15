import { Component } from 'react';
import { connect } from 'react-redux';

import { appsData, defaultAppData } from '../model/constants';

const get_app_details_from_id = (app_id) => {
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
		currentAppId: state.currentAppId,
		currentView: state.currentView,
		currentApp: get_app_details_from_id(state.currentAppId)
	};
};

class AppView extends Component {
	open_app = (app_id) => {
		switch (app_id) {
			case app_id:
				return (<p> App ID: { app_id } </p>);
			default:
				return (<p> No app loaded </p>);
		}
	};
	render() {
		get_app_details_from_id(-1);
		return (<div id="app-view" className="container">
			<h1>{ this.props.currentApp.name }</h1>
			{ this.open_app(this.props.currentAppId) }
		</div>);
	}
}

// export default AppView;
export default connect(mapStateToProps, null)(AppView);