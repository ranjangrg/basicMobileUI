
const updateTimeReducer = (initial_state = Date().substring(16, 24), action) => {
	switch (action.type) {
		case "UPDATE_TIME":
			return Date().substring(16, 24);
		default:
			return initial_state;
	}
};

export default updateTimeReducer;