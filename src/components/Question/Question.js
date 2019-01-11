import React from 'react'
import {Link} from 'react-router-dom'
import './Question.scss'

const Question = ({question}) => {
	console.log(question)
	const { title, view_count, tags, creation_date, score, question_id} = question
	const date = new Date(creation_date * 1000).toLocaleString()

	return (
		<>
			<div className="question-div">
				<Link to={`/answer/${question_id}`} style={{color: '#fff'}}><p className="question" dangerouslySetInnerHTML={{__html: `Q: ${title}`}}></p></Link>
				<div className="numbers">
					<div>Score : {score}</div>
					<div>Number Of Views: {view_count}</div>
				</div>
				<div className="tags">
					{
						tags.map(tag => <div key={tag}>
											{tag}
										</div>)
					}
				</div>
				<p className="date-created">Date Asked : { date }</p>
			</div>
		</>
	)
}

export default Question