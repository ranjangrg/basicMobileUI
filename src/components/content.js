import { Component } from 'react';
import AppList from './appList';
import AppView from './appView';

import { connect } from 'react-redux';

import { openApp, changeView } from '../actions';
import { views } from '../model/constants';

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

class Content extends Component {
	open_app_wrapper = (app_id) => {
		this.props.openApp(app_id);
	};
	render() {
		return (
			<div id="app-content" className="py-2">
				{ 
					this.props.currentView === views.APP_LIST ? 
					<AppList /> : <AppView app-id={this.props.currentAppId} />
				}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps())(Content);
