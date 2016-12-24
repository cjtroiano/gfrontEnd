var React = require('react')
var pdf = require('url?!../resume3.pdf')
var styles = require('../styles')


function Resume(){
	return(
		<div style={styles.pdf}>
			<object data={pdf} type="application/pdf" width="100%" height="100%">
			</object>
		</div>
	)
}

module.exports = Resume