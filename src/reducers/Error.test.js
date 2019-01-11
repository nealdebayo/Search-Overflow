import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Error from './Error'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore(Error)

describe('Error reducer ', () => {
	it("no errors initially", () => {
		expect(Error(undefined, {})).toEqual({ value : false })
	})
	it("handles errors appropraitely", () => {
		expect(Error(undefined, {type: "ERROR", payload: true})).toEqual({ value : true })
	})
})

