import React from 'react'
import './Loader.scss'

const Loader = ({ top }) => {
	return (
		<div className="loader-div" style={{marginTop : top}}>
			<i className="fa fa-spinner loader" style={{fontSize: '44px', color: '#110291'}}></i>
		</div>
	)
}

export default Loader