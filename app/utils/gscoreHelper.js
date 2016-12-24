var axios = require('axios')

var GscoreHelper = {
	getScores: function (){
		return axios.get('http://127.0.0.1:8000/scores/')
	}
}

module.exports = GscoreHelper