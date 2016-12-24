var React = require('react')
var GscoreTable = require('../components/GscoreTable')
var GscoreHelper = require('../utils/GscoreHelper')
var styles = require('../styles')

var GscoreContainer = React.createClass({
	getInitialState: function(){
		return{
			isLoading: true,
			scores: []
		}
	},
	componentWillMount: function(){
		GscoreHelper.getScores()
			.then (function(promise){
				//console.log("inside promise",promise.data)
				this.setState({
					isLoading: false,
					scores: promise.data
				})
			}.bind(this))
	},
	render: function (){
		return(
			<div style={styles.kennedyBg} className="stretched column">
				<GscoreTable scores={this.state.scores} isLoading={this.state.isLoading}/>
			</div>
		)
	}
})

module.exports = GscoreContainer