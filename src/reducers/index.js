import openAppReducer from './openApp.js';
import changeViewReducer from './changeView.js';
import updateTimeReducer from './updateTime.js';

import { combineReducers } from 'redux';

const allReducers = combineReducers({
	currentAppId: openAppReducer,
	currentView: changeViewReducer,
	currentTime: updateTimeReducer
});

export default allReducers;