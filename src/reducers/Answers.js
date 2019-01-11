import axios from 'axios'

export const GET_ANSWERS = "@@Answers/GET_ANSWERS"

const api = "http://api.stackexchange.com/2.2/questions/"


export const getAnswers = (id, page=1) => async dispatch => {
	dispatch({type:"SET_LOADER", payload: true})
	return axios.get(`${api}${id}/answers?page=${page}&order=desc&sort=votes&site=stackoverflow&filter=!b1MMEnxWXt-.sX`)
			.then(data =>{
					dispatch({type: GET_ANSWERS, payload: data.data})
					dispatch({type:'SET_LOADER', payload: false})					
			})
			.catch( err => {
				console.log(err)
				dispatch({type: "ERROR", payload: true})
				dispatch({type:'SET_LOADER', payload: false})
			})
}

export default (state = {results : {}}, action) => {
	switch (action.type) {
		case GET_ANSWERS:
			return {
				...state.results,
				results : action.payload
			}
		default:
			return state
	}
}
