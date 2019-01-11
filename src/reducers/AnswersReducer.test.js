import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { getAnswers, GET_ANSWERS } from './Answers'
import expect from 'expect'
import moxios from 'moxios'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Answers Reducer', () => {
  beforeEach(() => {
    moxios.install()
  })

  afterEach(() => {
    moxios.uninstall()
  })
  let request, expectedActions, store

  it("gets the answers data successfully on status 200", () => {
    moxios.wait(() => {
      request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: []
      });
    })

    expectedActions = [
      {type:"SET_LOADER", payload: true},
      {type: GET_ANSWERS, payload: []},
      {type:'SET_LOADER', payload: false}
    ]
    store = mockStore({ results: {} })

    return store.dispatch(getAnswers(1, 1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it("dispatches error on any other status code", () => {
      moxios.wait(() => {
        request = moxios.requests.mostRecent();
        request.respondWith({
          status: 403,
          response: []
        });
      })
      expectedActions = [
        {type:"SET_LOADER", payload: true},
        {type: "ERROR", payload: true},
        {type:'SET_LOADER', payload: false}
      ]
      store = mockStore({ results: {} })
      return store.dispatch(getAnswers(1, 1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })

  })
})
