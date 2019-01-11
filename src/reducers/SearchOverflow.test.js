import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { searchOverflow, SEARCH_OVERFLOW } from './SearchOverflow'
import expect from 'expect'
import moxios from 'moxios'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('Search Functionality Reducer', () => {
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
        response: ["testing"]
      });
    })

    expectedActions = [
      {type:"SET_LOADER", payload: true},
      {type: SEARCH_OVERFLOW, payload: ["testing"]},
      {type:'SET_LOADER', payload: false}
    ]
    store = mockStore({ results: {} })

    return store.dispatch(searchOverflow(1, 1)).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  })

  it("dispatches error on any other status code", () => {
      moxios.wait(() => {
        request = moxios.requests.mostRecent();
        request.respondWith({
          status: 403,
          response: ["testing"]
        });
      })
      expectedActions = [
        {type:"SET_LOADER", payload: true},
        {type: "ERROR", payload: true},
        {type:'SET_LOADER', payload: false}
      ]
      store = mockStore({ results: {} })
      return store.dispatch(searchOverflow(1, 1)).then(() => {
        expect(store.getActions()).toEqual(expectedActions)
      })

  })
})
