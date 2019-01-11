/* eslint-env jest */
import React from 'react'
import {shallow} from 'enzyme'
import Error from './Error.jsx'
import configureMockStore from "redux-mock-store"
import {Provider} from 'react-redux'

describe('Page - Answers', () => {
  let wrapper
  beforeAll(() => {
    const initialState = {}
    const mockStore = configureMockStore()
    const store = mockStore(initialState)
    wrapper = shallow(
      <Provider store={store}>
        <Error />
      </Provider>
    )
  })
  // component loads
  it('renders without crashing', () => {
    expect(wrapper.length).toEqual(1)
  })
})


