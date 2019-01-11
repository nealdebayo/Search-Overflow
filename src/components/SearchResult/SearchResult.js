import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom' 
import './SearchResult.scss'
import Question from './../Question/Question'
import Pagination from './../Pagination/Pagination'
import Loader from './../Loader/Loader'

const SearchResult = (props) => {
	const { isLoading, searchResult, Page, updatePage } = props
	const searchResultList = (searchResult.items)? (searchResult.items.length > 0 ? 
														searchResult.items.map(question => 
															<Question 
																key={question.question_id} 
																question={question}/>) : 'Enter a valid stack overflow question') : 'Enter a search query to see results'

	if (isLoading) {
		return (
			<Loader top={"40px"} />
		)
	}
	return (
			<div className="search-result-div">
				{searchResultList}				
				<Pagination total={searchResult.total} Page={Page} updatePage={updatePage}/>
			</div>
	)
}

const mapStateToProps = state => {
	return {
		isLoading: state.Loading.value,
		searchResult: state.SearchOverflow.results
	}
}

export default connect(mapStateToProps)(SearchResult)