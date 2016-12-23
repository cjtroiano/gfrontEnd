var React = require('react')
var PropTypes = React.PropTypes
var GscoreRow = require('./GscoreRow')

function GscoreTable (props){
	var td = props.scores
	if (props.isLoading){
		return(
			<div>Loading</div>
		)
	}else{
		var scores = props.scores
		return (
			<div className="ui two column centered padded grid">
				<div className="row">
					<h1 className="ui header">My Golf Score Database</h1>
				</div>
				<div className="column">
					<table className="ui sortable padded table">
						<thead>
							<tr>
								<th className="">Course</th>
								<th className="">Score</th>
								<th className="">Date</th>
							</tr>
						</thead>
						<tbody>
							{scores.map(function(row, key){
								return (<GscoreRow row={row} key={key}/>)
							})}
						</tbody>
					</table>
				</div>
			</div>
		)
	}
}

GscoreTable.PropTypes = {
	isLoading: PropTypes.bool.isRequired,
	scores: PropTypes.array.isRequired
}


module.exports = GscoreTable