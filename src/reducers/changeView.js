import { views } from '../model/constants';

const changeViewReducer = (initial_state = views.APP_LIST, action) => {
	switch (action.type) {
		case "CHANGE_VIEW":
			return action.payload;
		default:
			return initial_state;
	}
};

export default changeViewReducer;