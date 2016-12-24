var ken = require("url?!../kennedy.jpg")

var styles = {
	kennedyBg: {
		backgroundImage: "url(" + ken + ")",
		backgroundSize: "100%",
		position: "absolute",
		top:40,
		right:0,
		bottom:0,
		left:0,
		width: "100%",
		height: "auto"
	},
	pdf: {
		position: "absolute",
		top:40,
		right:0,
		bottom:0,
		left:0,
		width: "100%",
		height: "auto"
	}  
}

module.exports = styles