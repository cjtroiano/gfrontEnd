var React = require('react')
var gscoreHelper = require('../utils/gscoreHelper')
var PropTypes = React.PropTypes


/* what I started to do with the var Gscore instead of function
Gscore is create a container. Create a GscoreContainer and then make a Gscore component,
pass the component the AJAX data. see(ConfirmBattleContainer)*/
//function Gscore(){
var Gscore = React.createClass({
	// use props with table data ya doosh
	//var shouldBeProps = []
	// var scores = gscoreHelper()
	// 	.then (function(promise){
	// 		this.props.scores = promise.data
	// 	})
	PropTypes: {
		scores: PropTypes.array
	},
	getDefaultProps: function(){
		return{
			scores: []
		}
	},
	componentDidMount: function(){
		var scores = gscoreHelper()
			.then (function(promise){
				console.log(this.props.scores)
				console.log(promise.data)
		}.bind(this))
	},
	render: function (){
		return(
			<div>
				<div> Gscore Baby </div>
			</div>
		)
	}
})

module.exports = Gscore