/* eslint-env jest */
import React from 'react'
import {shallow} from 'enzyme'
import Search from './Search.jsx'
import configureMockStore from "redux-mock-store"
import {Provider} from 'react-redux'

describe('Page - Search', () => {
  let wrapper
  beforeAll(() => {
    const initialState = {}
    const mockStore = configureMockStore()
    const store = mockStore(initialState)
    wrapper = shallow(
      <Provider store={store}>
        <Search />
      </Provider>
    )
  })
  // component loads
  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1)
  })
})



