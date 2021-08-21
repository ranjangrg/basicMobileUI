import { Component } from 'react';
import { connect } from 'react-redux';

import { changeTheme, changeLang } from '../../actions';
import { themes, langs } from '../../model/constants';
import { getLang } from '../../modules/globalFunctions.js';

const mapStateToProps = (state) => {
	return {
		currentTheme: state.currentTheme,
		currentLang: state.currentLang
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		propChangeTheme: (_theme) => changeTheme(_theme),
		propChangeLang: (_lang) => changeLang(_lang)
	};
};

class SettingsApp extends Component {
	current_theme = () => {
		switch (this.props.currentTheme) {
			case themes.LIGHT:
				return (<span> Light mode </span>);
			case themes.DARK:
				return (<span> Dark mode </span>);
			case themes.MIXED:
				return (<span> Mixed mode </span>);
			default:
				return (<span> Default </span>);
		}
	};
	render() {
		return (<>
			<h1> Settings App </h1>
			<ul className="list-group pb-3">
				<li className="list-group-item"> 
					<span className="col float-start"> Theme  </span>
					<span className="col float-end"> 
						<select onChange={ (e) => {
								const selected_theme = parseInt(e.target.options[e.target.options.selectedIndex].value);
								this.props.propChangeTheme(selected_theme);
							}} className="col form-select" aria-label="Select theme">
							<option defaultValue>Select a theme</option>
							<option value="0">Light</option>
							<option value="1">Dark</option>
							<option value="2">Mixed</option>
						</select>
					</span>
				</li>
				<li className="list-group-item"> 
					<span className="col float-start"> Language  </span>
					<span className="col float-end"> 
						<select onChange={ (e) => {
								const selected_lang = e.target.options[e.target.options.selectedIndex].value;
								this.props.propChangeLang(selected_lang);
							}} className="col form-select" aria-label="Select theme">
							<option defaultValue> Select language</option>
							<option value="EN">English</option>
							<option value="FR">French</option>
							<option value="NL">Dutch</option>
							<option value="DE">German</option>
							<option value="IT">Italian</option>
						</select>
					</span>
				</li>
			</ul>
			<h2> Current Settings </h2>
			<ul className="list-group">
				<li className="list-group-item"> 
					<span className="float-start"> Current Theme </span>
					<span className="float-end"> { this.current_theme() } </span>
				</li>
				<li className="list-group-item"> 
					<span className="float-start"> Current Language </span>
					<span className="float-end"> { this.props.currentLang } </span>
				</li>
				<li className="list-group-item"> ... </li>
				<li className="list-group-item"> more settings (todo) </li>
			</ul>
		</>);
	};
}

export default connect(mapStateToProps, mapDispatchToProps())(SettingsApp);