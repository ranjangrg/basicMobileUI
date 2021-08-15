const openAppReducer = (initial_state = 0, action) => {
	switch (action.type) {
		case "OPEN_APP":
			return action.payload;
		default:
			return initial_state;
	}
};

export default openAppReducer;