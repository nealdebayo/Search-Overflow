import axios from 'axios'

export const SEARCH_OVERFLOW = "@search/search_overflow"
const api = "https://api.stackexchange.com/2.2/search?order=desc&sort=votes&site=stackoverflow&filter=!b1MMEU)hK2kjva"

export const searchOverflow = (payload, pageNumber) => async dispatch => {
	const keywords = String(payload).split(' ').join(';')
	dispatch({type:'SET_LOADER', payload: true})
	return axios.get(`${api}&tagged=${keywords}&page=${pageNumber}`)
			.then(data =>{
				dispatch({type: SEARCH_OVERFLOW, payload: data.data})
				dispatch({type:'SET_LOADER', payload: false})
			})
			.catch( err => {
				console.log(err)
				dispatch({type:"ERROR", payload: true})
				dispatch({type:'SET_LOADER', payload: false})
			})
}

const SearchOverflow = (state = {results : {}}, action) => {
	switch (action.type) {
		case SEARCH_OVERFLOW:
			return {
				...state.results,
				results : action.payload
			}
		default:
			return state
	}
}

export default SearchOverflow