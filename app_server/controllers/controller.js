var request = require('request');
var apiOptions = {
	server : "http://localhost:3000"
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

module.exports.index=function(req,res){
    res.render('index', {title:'Main'});
};
module.exports.blog=function(req,res){
    res.render('blog', {title:'Blog'});
};

module.exports.artistasrender=function (req,res) {
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
