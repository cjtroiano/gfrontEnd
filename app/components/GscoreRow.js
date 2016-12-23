var React = require('react')
var PropTypes = React.PropTypes

function GscoreRow (props){
	var row = props.row
	console.log("row",row)
	return(
		<tr>
			<td>{row.Course}</td>
			<td>{row.Score}</td>
			<td>{row.Date}</td>
		</tr>
	)
}

GscoreRow.PropTypes = {
	row: PropTypes.object.isRequired
}
module.exports = GscoreRow