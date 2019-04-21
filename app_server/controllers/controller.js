var request = require('request');
var apiOptions = {
	server : "https://ladodelservidor.herokuapp.com/"
};

var renderArtistas = function (req, res, responseBody){
	var message;
	if (!(responseBody instanceof Array)){
		message = "API lookup error";
		responseBody = [];
	}

	res.render('artistas',{
		artistas:responseBody,
	});
}


module.exports.artistas=function (req,res) {
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
			//No Necesito manipulación previa
		}
			 renderArtistas(req, res, data);
		});
};
