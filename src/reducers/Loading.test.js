import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import Loading from './Loading'
import expect from 'expect'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore(Error)

describe('Loading reducer ', () => {
	it("no loading initially", () => {
		expect(Loading(undefined, {})).toEqual({ value : false })
	})
	it("handles load events appropraitely", () => {
		expect(Loading(undefined, {type: "SET_LOADER", payload: true})).toEqual({ value : true })
	})
})

