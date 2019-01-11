import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import configureMockStore from "redux-mock-store"
import {Provider} from 'react-redux'


it('renders without crashing', () => {
	const mockStore = configureMockStore()
	const initialState = {Error: {value: false}, 
						SearchInput : { value : ''}, 
						SearchOverflow : {results: []},
						Loading:  { value : ''},
						Answers:  { value : ''}}
	const store = mockStore(initialState)

	const div = document.createElement('div');
	ReactDOM.render(<Provider store={store}>
						<App />
					</Provider>, div);
	ReactDOM.unmountComponentAtNode(div);
});
