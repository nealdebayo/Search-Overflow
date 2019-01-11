import {createStore, combineReducers, applyMiddleware} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import SearchInput from './reducers/SearchInput'
import SearchOverflow from './reducers/SearchOverflow'
import Loading from './reducers/Loading'
import Answers from './reducers/Answers'
import Error from './reducers/Error'

const loggerMiddleware = createLogger()

const Store = (state = {}) => {

	const middlewares = [
			thunkMiddleware,
			loggerMiddleware
	]

	return createStore(
		combineReducers({
			SearchInput,
			SearchOverflow,
			Loading,
			Answers,
			Error
		}),
		state,
		applyMiddleware(...middlewares)
	)

}

export default Store

