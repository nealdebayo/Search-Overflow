import React from 'react'
import './SearchBox.scss'
import {connect} from 'react-redux'
import { NEW_INPUT } from './../../reducers/SearchInput'
import { searchOverflow } from './../../reducers/SearchOverflow'


const SearchBox = (props) => {
	const { position, top, width, height, Page } = props
	const boxStyle = {
		width,
		height
	}
	const handleChange = (e) => {
		props.newInput(e.target.value)
	}
	const handleSubmit = (e) => {
		if (e.key === "Enter") {
			props.submitInput(props.searchInput.value, Page)
		}

	}
	return (
		<>
			<div style={{position, top}} className="search-box-div">
				<input 
					type="text" 
					value={props.searchInput.value} 
					placeholder="Search Overflow" 
					onKeyDown={e => handleSubmit(e)}
					onChange={e => handleChange(e)} 
					className = "search-box-input"  
					style={boxStyle} />
				<button onClick={() => props.submitInput(props.searchInput.value, Page)} className="search-box-btn"><i className="fa fa-search"></i></button>
			</div>
		</>
		)
}

const mapStateToProps = state => {
	return {
		searchInput: state.SearchInput
	}
}

const mapDispatchToProps = dispatch => {
	return {
		newInput: (payload) => dispatch({ type : NEW_INPUT, payload }),
		submitInput: (payload, pageNumber) => dispatch(searchOverflow(payload, pageNumber)),
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);


