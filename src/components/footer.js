import { Component } from 'react';
import { connect } from 'react-redux';

import { openApp, changeView } from '../actions';
import { views } from '../model/constants';

// import HomeIcon from '@material-ui/icons/Home';
// import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// import AppsIcon from '@material-ui/icons/Apps';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ReorderIcon from '@material-ui/icons/Reorder';
import homeIcon from '../appIcons/homeIcon.svg';

// const homeIconStyle = {fontSize: "3rem", cursor: "pointer"};
// const arrowForwardIconStyle = {fontSize: "2rem", cursor: "pointer"};
const arrowBackIconStyle = {fontSize: "2rem", cursor: "pointer"};
const appsIconStyle = {fontSize: "3rem", cursor: "pointer"};
const ReorderIconStyle = {fontSize: "2rem", cursor: "pointer"};

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

class Footer extends Component {
	open_applist_wrapper = () => {
		this.props.changeView(views.APP_LIST);
	};
	render() {
		return (
			<footer id="app-footer" className="container gy-0">
				<div className="row align-items-center justify-content-between">
					<div className="col"> <ArrowBackIcon style={ arrowBackIconStyle } /> </div>
					<div className="col">
						<img 
							src={ homeIcon }
							style={ appsIconStyle } 
							alt="home-button"
							onClick={ () => this.open_applist_wrapper() } />
					</div>
					<div className="col"> <ReorderIcon style={ ReorderIconStyle } /> </div>
				</div>
			</footer>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps())(Footer);
