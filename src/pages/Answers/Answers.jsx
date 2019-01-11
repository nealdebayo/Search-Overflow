import React,{ Component } from 'react'
import {connect} from 'react-redux'
import Answer from './../../components/Answer/Answer'
import Pagination from './../../components/Pagination/Pagination'
import Loader from './../../components/Loader/Loader'
import { getAnswers } from './../../reducers/Answers'
import './Answers.scss'
import queryString from 'query-string'

class Answers extends Component {
	constructor(props) {
		super(props)
		const thePage = parseInt(queryString.parse(props.location.search).page)
		const question_id = parseInt(props.match.params.question_id)
	  	this.state = {
	  		page_no : (thePage && thePage>0)? thePage : 1,
	  		question_id
	  	}
	}

	componentDidMount(){
		this.props.getAnswers(this.state.question_id, this.state.page_no)
	}

	handleUpdate = pageNumber => {
	  	this.props.history.push(`/answer/${this.state.question_id}/?page=${pageNumber}`)
	  	this.props.getAnswers(this.state.question_id, pageNumber)
	  	this.setState({
	  		page_no : (pageNumber && pageNumber>0)? pageNumber : 1
	  	})
  	}

	render(){
		const { page_no } = this.state
		const { answers, isLoading } = this.props
		console.log(answers)
		const allAnswers = (answers.items && answers.items.length > 0)? 
							answers.items.map(answer => <Answer answer={answer} key={answer.answer_id}/>) : 
							<div style={{textAlign : 'center', marginTop: '20%'}}>
								There is no answer to this question
							</div>

		if (answers.items && !isLoading) {
			return (
			<>	
				<div style={{textAlign: 'center', padding: '10px'}}>
					<p style={{fontWeight: '700'}}>ANSWERS</p>
					<p><i style={{color:'#323232'}} className="fa fa-square"></i> - Accepted answer</p>
				</div>
				{allAnswers}
				<Pagination total={answers.total} Page={page_no} updatePage={this.handleUpdate}/>
			</>
			)
		}
		return (
			<>
				<Loader top={"20%"}/>
			</>
			)		
	}
}

const mapStateToProps = state => {
	return {
		answers: state.Answers.results,
		isLoading: state.Loading.value
	}
}

const mapDispatchToProps = dispatch => {
	return {
		getAnswers : (id, page) => dispatch(getAnswers(id, page))
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(Answers)