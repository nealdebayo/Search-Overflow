import React,{Component} from 'react';
import {connect} from 'react-redux'
import { NEW_INPUT } from './../../reducers/SearchInput'
import { searchOverflow } from './../../reducers/SearchOverflow'
import './Search.scss'
import SearchBox from './../../components/SearchBox/SearchBox'
import SearchResult from './../../components/SearchResult/SearchResult'
import queryString from 'query-string'

class Search extends Component {
  constructor(props){
  	super(props)
  	const thePage = parseInt(queryString.parse(props.location.search).page)
  	this.state = {
  		page_no : (thePage && thePage>0)? thePage : 1
  	}
  }
  handleUpdate = (pageNumber) => {
  	this.props.history.push(`/?page=${pageNumber}`)
  	this.props.submitInput(this.props.searchInput.value, pageNumber)
  	this.setState({
  		page_no : (pageNumber && pageNumber>0)? pageNumber : 1
  	})
  }
  render() {
  	const { page_no } = this.state
  	console.log(page_no)
    return (
    	<>
	      <div className="search-div">
	        <SearchBox 
	        	Page={page_no}
	        	position={"relative"}
	        	top={"80px"}
	        	width={"60vw"}
	        	height={"40px"} />
	      </div>
	      <div className="search-result">
	      	<SearchResult Page={page_no} updatePage={this.handleUpdate}/>
	      </div>
	     </>
    );
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Search);


