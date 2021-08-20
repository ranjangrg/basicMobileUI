import openAppReducer from './openApp.js';
import changeViewReducer from './changeView.js';
import updateTimeReducer from './updateTime.js';
import changeThemeReducer from './changeTheme.js';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
	currentAppId: openAppReducer,
	currentView: changeViewReducer,
	currentTime: updateTimeReducer,
	currentTheme: changeThemeReducer
});

export default allReducers;