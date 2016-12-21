var axios = require('axios')


function getScores (){
	return axios.get('http://127.0.0.1:8000/scores/')
}

module.exports = getScores