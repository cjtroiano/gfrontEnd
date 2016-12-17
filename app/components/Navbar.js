var React = require('react')
var Link = require('react-router').Link
var IndexLink = require('react-router').IndexLink
var Resume = require('./Resume')
var Main = require('./Main')
var Gscore = require('./Gscore')


function handleClick (state){
	if(state.activeItem === 'home'){
		state.activeItem = "home"
		state.home = "active Item"
		state.resume = "item"
		state.gscore = "item"
		/*this.setState({
			home: "activeItem",
			resume: "item",
			gscore: "item"
		})*/
	}else if(state.activeItem === 'resume'){
		state.activeItem = "resume"
		state.home = "item"
		state.resume = "active item"
		state.gscore = "item"
	}else {
		state.activeItem = "gscore"
		state.home = "item"
		state.resume = "item"
		state.gscore = "active item"
	}
}

function Navbar (state){
	return (
		<div className='main-container'>
			<div className="ui inverted menu">
				<IndexLink to="/">
					<span name="home" className={state.home} onClick={handleClick('home')}>
						Home
					</span>
				</IndexLink>
				<Link to="/resume">
					<span name="resume" className={state.resume} onClick={handleClick('resume')}>
						Resume
					</span>
				</Link>
				<Link to="/gscore">
					<span name="gscore" className={state.gscore} onClick={handleClick('gscore')}>
						Golf Score Database
					</span>
				</Link>
			</div>
		</div>
	)
}

module.exports = Navbar