export const NEW_INPUT = "@search/new_input"

const SearchInput = (state = {value: ''}, action) => {
	switch (action.type) {
		case NEW_INPUT: 
			return {
				...state,
				value : action.payload 
			}

		default:
			return state

	}
}

export default SearchInput
