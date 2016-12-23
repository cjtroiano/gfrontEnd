var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var IndexLink = ReactRouter.IndexLink
//var PropTypes = React.PropTypes
//var Navbar = require('./Navbar')


var Main = React.createClass({
	/*maybe use the routing props to decide which is active to 
	fix the refresh issue
	make table sortable
	make entire button selectable
	fix up navbar file
	design resume and home tabs
	use different navbar class?
	fix backend permissions to be readOnly for guests?
	*/
	getInitialState: function (){
		return {
			activeItem: "home",
			home: "active item",
			resume: "item",
			gscore: "item" 
		}
	},
	handleChange (event){
		console.log("location", this.props.location.pathname)
		console.log("event.target", event)
		console.log(this.state)
		if(event.target.text === 'Home'){
			this.setState({
				activeItem: "home",
				home: "active item",
				resume: "item",
				gscore: "item"
			})
		}else if(event.target.text === 'Resume'){
			this.setState({
				activeItem: "resume",
				home: "item",
				resume: "active item",
				gscore: "item"
			})
		}else {
			this.setState({
				activeItem: "gscore",
				home: "item",
				resume: "item",
				gscore: "active item"
			})
		}
	},
	/*componentWillMount: function (){
		if(this.props.location.pathname === '/'){
			this.setState({
				activeItem: "home",
				home: "active item",
				resume: "item",
				gscore: "item"
			})
		}else if(this.props.location.pathname === '/resume'){
			this.setState({
				activeItem: "resume",
				home: "item",
				resume: "active item",
				gscore: "item"
			})
		}else {
			this.setState({
				activeItem: "gscore",
				home: "item",
				resume: "item",
				gscore: "active item"
			})
		}
	},*/

	render: function () {
		//console.log(this.state)
		return (
			<div>
				<div className='main-container'>
					<div className="ui inverted menu">
						<div value="home" className={this.state.home} onClick={this.handleChange}>
							<IndexLink to="/">
							Home
							</IndexLink>
						</div>
						<div value="resume" className={this.state.resume} onClick={this.handleChange}>
							<Link to="/resume">
							Resume
							</Link>
						</div>
						<div value="gscore" className={this.state.gscore} onClick={this.handleChange}>
							<Link to="/gscore">
							Golf Score Database
							</Link>
						</div>
					</div>
				</div>
				{this.props.children}
			</div>
		)
	}
});



module.exports = Main