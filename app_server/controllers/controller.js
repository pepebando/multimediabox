var request = require('request');
var apiOptions = {
	server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production'){
	apiOptions.server = "https://ladodelservidor.herokuapp.com/";
}

var renderArtistas = function (req, res, responseBody){
	var message;
	if (!(responseBody instanceof Array)){
		message = "API lookup error";
		responseBody = [];
	}
	res.render('artistas',{

		artistas:responseBody,
		message : message
	});
}


module.exports.artistasS=function (req,res) {
	var requestOptions, path;
	path = '/api/artistas';
	requestOptions = {
		url : apiOptions.server + path,
		method : "GET",
		json : {},
		qs : {

		}
	};
	request (
		requestOptions,
		function(err, response, body){
			var data;
			data = body;
			if (response.statusCode === 200 && data.length) {
				//función manejar algún field
			}
			 renderArtistas(req, res, data);
		});
};
