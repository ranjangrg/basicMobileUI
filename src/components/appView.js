import { Component } from 'react';
import { connect } from 'react-redux';

import { appsData, defaultAppData } from '../model/constants';

import InfoIcon from '@material-ui/icons/Info';

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
		currentAppId: state.currentAppId,
		currentView: state.currentView,
		currentApp: get_app_details_from_id(state.currentAppId)
	};
};

class AppView extends Component {
	open_app = (app_id) => {
		switch (app_id) {
			case app_id:
				const app_detail = get_app_details_from_id(app_id);
				return (<div>
					<span 
						type="button" 
						className="btn btn-dark"
						data-target-div="app-view-app-details"
						onClick={(e) => {
							let elem = document.getElementById(e.target.dataset.targetDiv);
							console.log(elem)
							elem.classList.toggle("d-none");
						}}
						> <InfoIcon /> Show app details 
					</span>
					<div>
						<ul id="app-view-app-details" className="list-group pb-3 d-none">
							<li className="list-group-item">
								<span className="float-start">App ID:</span> 
								<span className="float-end">{ app_detail.id } </span>
							</li>
							<li className="list-group-item">
								<span className="float-start">App Name:</span> 
								<span className="float-end">{ app_detail.name } </span>
							</li>
							<li className="list-group-item">
								<span className="float-start">App Content:</span> 
								<span className="float-end text-muted"> See below </span>
							</li>
						</ul>
					</div>
					<div className="border">
						{ app_detail.source }
					</div>
				</div>);
			default:
				return (<p> No app loaded </p>);
		}
	};
	render() {
		// get_app_details_from_id();
		return (<div id="app-view" className="container">
			{/* <h1>{ this.props.currentApp.name }</h1> */}
			{ this.open_app(this.props.currentAppId) }
		</div>);
	}
}

// export default AppView;
export default connect(mapStateToProps, null)(AppView);