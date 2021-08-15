import { views } from '../model/constants';

export const openApp = (app_id = 0) => {
	return {
		type: "OPEN_APP",
		payload: app_id
	};
};

export const changeView = (curr_view = views.APP_LIST) => {
	return {
		type: "CHANGE_VIEW",
		payload: curr_view
	};
};

export const updateTime = (curr_time = Date().substring(16, 24)) => {
	return {
		type: "UPDATE_TIME",
		payload: curr_time
	};
};