const Error = (state = { value : false }, action) => {
	switch (action.type) {
		case "ERROR":
			return {
				...state,
				value: action.payload
			}
		default:
			return state
	}
}

export default Error