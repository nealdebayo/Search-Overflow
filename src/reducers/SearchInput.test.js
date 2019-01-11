import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import SearchInput,{ NEW_INPUT } from './SearchInput'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore(Error)

describe('Loading reducer ', () => {
	it("no input initially", () => {
		expect(SearchInput(undefined, {})).toEqual({ value : '' })
	})
	it("handles input events appropraitely", () => {
		expect(SearchInput(undefined, {type: NEW_INPUT, payload: "test"})).toEqual({ value : "test" })
	})
})


