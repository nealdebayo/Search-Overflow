import React from 'react'
import './Answer.scss'

const Answer = ({answer}) => {
	const { title, body, score, is_accepted, creation_date } = answer 
	const date = new Date(creation_date * 1000).toLocaleString()
	return (
			<div className="answer-div" style={{backgroundColor: (is_accepted)? '#323232': '#0d7377'}}>
					<div className="overflow-div">
						<p className="title" style={{color: '#fff'}} dangerouslySetInnerHTML={{__html: `QUESTION : ${title}`}}></p>
						<section dangerouslySetInnerHTML={{__html: `<b>ANSWER : </b> <br /> ${body}`}}></section>
						<div className="numbers">
							<div>Score : {score}</div>
						</div>
						<p className="date-created">Date Answered : { date }</p>
					</div>
			</div>
	)
}

export default Answer