import { themes } from  '../model/constants.js';
const changeThemeReducer = (initial_state = themes.LIGHT, action) => {
	switch (action.type) {
		case "CHANGE_THEME":
			return action.payload;
		default:
			return initial_state;
	}
};

export default changeThemeReducer;