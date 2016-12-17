var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var hashHistory = ReactRouter.hashHistory;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main')
var Home = require('../components/Home')
var Resume = require('../components/Resume')
var Gscore = require('../components/Gscore')

var routes = (
	<Router history={hashHistory}>
		<Route path='/' component={Main}>
			<IndexRoute component={Home} />
			<Route path='/resume' component={Resume} />
			<Route path='/Gscore' component={Gscore} />
		</Route>
	</Router>
)

module.exports = routes