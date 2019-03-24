var request = require('request');
var apiOptions = {
	server : "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production'){
	apiOptions.server = "https://ejemploclaseservidor2.herokuapp.com";
}

var renderPeliculasFav = function (req, res, responseBody){
	var message;
	if (!(responseBody instanceof Array)){
		message = "API lookup error";
		responseBody = [];
	}
	res.render('favoritos',{

		peliculas:responseBody,
		message : message
	});
}


module.exports.peliculasfav=function (req,res) {
	var requestOptions, path;
	path = '/api/peliculas';
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
			renderPeliculasFav(req, res, data);
		});
};

var renderMusicaFav = function (req, res, responseBody){
	var message;
	if (!(responseBody instanceof Array)){
		message = "API lookup error";
		responseBody = [];
	}
	res.render('favmusica',{

		canciones:responseBody,
		message : message
	});
}


module.exports.musicafav=function (req,res) {
	var requestOptions, path;
	path = '/api/canciones';
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
			renderMusicaFav(req, res, data);
		});
};


var renderseriesFav = function (req, res, responseBody){
	var message;
	if (!(responseBody instanceof Array)){
		message = "API lookup error";
		responseBody = [];
	}
	res.render('favseries',{

		series:responseBody,
		message : message
	});
}


module.exports.seriesfav=function (req,res) {
	var requestOptions, path;
	path = '/api/series';
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
			renderseriesFav(req, res, data);
		});
};


var renderLibrosFav = function (req, res, responseBody){
	var message;
	if (!(responseBody instanceof Array)){
		message = "API lookup error";
		responseBody = [];
	}
	res.render('favlibros',{

		libros:responseBody,
		message : message
	});
}


module.exports.librosfav=function (req,res) {
	var requestOptions, path;
	path = '/api/libros';
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
			renderLibrosFav(req, res, data);
		});
};

var renderJuegosFav = function (req, res, responseBody){
	var message;
	if (!(responseBody instanceof Array)){
		message = "API lookup error";
		responseBody = [];
	}
	res.render('favjuegos',{

		juegos:responseBody,
		message : message
	});
}


module.exports.juegosfav=function (req,res) {
	var requestOptions, path;
	path = '/api/juegos';
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
			renderJuegosFav(req, res, data);
		});
};
