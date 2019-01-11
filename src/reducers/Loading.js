const Loading = (state = { value : false }, action) => {
	switch(action.type){
		case 'SET_LOADER':
			return {
				...state,
				value: action.payload
			}
		default:
			return state
	}
}

export default Loading