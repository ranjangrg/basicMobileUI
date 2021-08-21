import { langs } from '../model/constants';

const changeLangReducer = (initial_state = langs.EN, action) => {
	switch (action.type) {
		case "CHANGE_LANG":
			return action.payload;
		default:
			return initial_state;
	}
};

export default changeLangReducer;