import React from 'react'

const Pagination = ({total, Page, updatePage}) => {

	const pages = Math.ceil(total / 30)
	let pagination = []
	if (pages) {
		pagination.push(
			<div className="page-numbers" key={'<<<<'} style={{display: (Page - 4 < 1)? 'none': 'block'}}>
				<button className="page-btns" alt="go four pages back" onClick={()=>updatePage(Page-4)}>{'<<<<'}</button>
			</div>
		)
		pagination.push(
			<div className="page-numbers" key={'<'} style={{display: (Page - 1 < 1)? 'none': 'block'}}>
				<button className="page-btns" alt="go four pages back" onClick={()=>updatePage(Page-1)}>{'<'}</button>
			</div>
		)
		if (pages <= 10) {
			for(let i=1; i <= pages; i++) {
				pagination.push(
					<div className="page-numbers" key={i}>
							<button className="page-btns" onClick={()=>updatePage(i)} style={{backgroundColor: (Page === i)? '#14ffec' : '#212121'}}>
								{i}
							</button>
					</div>
					)
			}	
		} else {
			const middle = Page
				for(let i = 1; i <= pages; i++) {
					if ( i === 1 || i === middle - 1 || i === middle - 2 || i === middle || i === middle + 1 || i === middle + 2 || i === pages) {
						pagination.push(
							<div className="page-numbers" key={i}>
									<button className="page-btns" onClick={()=>updatePage(i)} style={{backgroundColor: (Page === i)? '#14ffec' : '#212121'}}>
										{i}
									</button>
							</div>
						)
					}
					else if (i === middle - 3 || i === middle + 3) {
							pagination.push(
								<div className="page-numbers" key={i}>
									{"..."}
								</div>
						)
					}

				}	
			}	

		pagination.push(
			<div className="page-numbers" key={'>'} style={{display: (Page + 1 > pages)? 'none': 'block'}}>
				<button className="page-btns" alt="go four pages back" onClick={()=>updatePage(Page+1)}>{'>'}</button>
			</div>
		)
		pagination.push(
			<div className="page-numbers" key={'>>>>'} style={{display: (Page+ 4 > pages)? 'none': 'block'}}>
				<button className="page-btns" alt="go four pages forward" onClick={()=>updatePage(Page+4)}>{'>>>>'}</button>
			</div>
		)
	
	}

	return (
		<div className="pagination-div">
			{pagination}
		</div>
	)
}


export default Pagination