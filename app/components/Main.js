var React = require('react')
var ReactRouter = require('react-router')
var Link = ReactRouter.Link
var IndexLink = ReactRouter.IndexLink
//var PropTypes = React.PropTypes
//var Navbar = require('./Navbar')

var Main = React.createClass({
	/*
	fix the refresh issue
	make table sortable
	design home tab
	use different navbar class?
	fix backend permissions to be readOnly for guests?
	*/
	getInitialState: function (){
		console.log("location", this.props.location.pathname)
		var reloadedTab = this.props.location.pathname
		if (reloadedTab === '/'){
			return {
				activeItem: "home",
				home: "active item",
				resume: "item",
				gscore: "item"
			}
		}else if (reloadedTab === '/resume'){
			return {
				activeItem: "resume",
				home: "item",
				resume: "active item",
				gscore: "item"
			}
		} else{
			return {
				activeItem: "gscore",
				home: "item",
				resume: "item",
				gscore: "active item"
			}
		}
	},
	handleChange (event){
		//console.log("location", this.props.location.pathname)
		//console.log("xp",this.props.routes[this.props.routes.length - 1].component.name)
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
	render: function () {
		//console.log(this.state)
		return (
			<div>
				<div className='main-container'>
					<div className="ui inverted menu">
						<IndexLink to="/" className={this.state.home} onClick={this.handleChange}>
						Home
						</IndexLink>
						<Link to="/resume" className={this.state.resume} onClick={this.handleChange}>							
						Resume
						</Link>
						<Link to="/gscore" className={this.state.gscore} onClick={this.handleChange}>
						Golf Score Database
						</Link>
					</div>
				</div>
				{this.props.children}
			</div>
		)
	}
});



module.exports = Main