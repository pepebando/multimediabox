var mongoose = require('mongoose');
var Art = mongoose.model('Artista');
var Eve = mongoose.model('Evento');

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
}

module.exports.ArtistasCreate = function (req, res) {
	console.log(req.body);
	Art.create({
    nombre: req.body.nombre,
  	profesion: req.body.profesion,
  	portafolio: req.body.portafolio,
  	foto: req.body.foto

	}, function(err,artista){
		if(err){
			console.log(err);
			sendJsonResponse(res,400,err);
		}else{
			console.log(artista);
			sendJsonResponse(res,201,artista);
		}
	}

	)};

module.exports.ArtistasList = function (req, res) {
	Art.find().exec(
	  	function(err, artista){
	  		if (!artista) {
          sendJsonResponse(res, 404, {
            "message": "id not found"
          });
          return;
        } else if (err) {
          sendJsonResponse(res, 400, err);
          return;
        }
        sendJsonResponse(res, 200, artista);
	  	});
	};




module.exports.ArtistasDeleteOne = function (req, res) {
	var id = req.params.artistasid;
	if (id) {
	  Art
		.findByIdAndRemove(id)
		.exec(
		  function(err, artista) {
			if (err) {
			  console.log(err);
			  sendJsonResponse(res, 404, err);
			  return;
			}
			console.log("Deleted");
			sendJsonResponse(res, 204, null);
		  }
	  );
	} else {
	  sendJsonResponse(res, 404, {
		"message": "No id"
	  });
	}
	};

	module.exports.ArtistasReadOne = function(req, res){
		if (req.params && req.params.artistasid){
			Art
				.findById(req.params.artistasid)
				.exec(function(err, artista){
					if(!artista){
						console.log(req.params.artistasid);
						sendJsonResponse(res, 404, {
							"message": "id not found"
						});
						return;
					} else if(err){
						sendJsonResponse(res, 404, err);
						return;
					}
					sendJsonResponse(res, 200, artista);
				});
		}else{
			sendJsonResponse(res, 404, {
				"message": "No id in request"
			});
		}
	};

	module.exports.EventosCreate = function (req, res) {
		console.log(req.body);
		Eve.create({
			nombreevento: req.body.nombre,
			fecha: req.body.profesion,
			foto: req.body.foto
	
		}, function(err,evento){
			if(err){
				console.log(err);
				sendJsonResponse(res,400,err);
			}else{
				console.log(evento);
				sendJsonResponse(res,201,evento);
			}
		}
	
		)};
	
	module.exports.EventosList = function (req, res) {
		Eve.find().exec(
				function(err, evento){
					if (!evento) {
						sendJsonResponse(res, 404, {
							"message": "id not found"
						});
						return;
					} else if (err) {
						sendJsonResponse(res, 400, err);
						return;
					}
					sendJsonResponse(res, 200, evento);
				});
		};
	
	
	
	
	module.exports.EventosDeleteOne = function (req, res) {
		var id = req.params.eventosid;
		if (id) {
			Eve
			.findByIdAndRemove(id)
			.exec(
				function(err, evento) {
				if (err) {
					console.log(err);
					sendJsonResponse(res, 404, err);
					return;
				}
				console.log("Deleted");
				sendJsonResponse(res, 204, null);
				}
			);
		} else {
			sendJsonResponse(res, 404, {
			"message": "No id"
			});
		}
		};
	
		module.exports.EventosReadOne = function(req, res){
			if (req.params && req.params.artistasid){
				Eve
					.findById(req.params.eventosid)
					.exec(function(err, evento){
						if(!evento){
							console.log(req.params.eventosid);
							sendJsonResponse(res, 404, {
								"message": "id not found"
							});
							return;
						} else if(err){
							sendJsonResponse(res, 404, err);
							return;
						}
						sendJsonResponse(res, 200, evento);
					});
			}else{
				sendJsonResponse(res, 404, {
					"message": "No id in request"
				});
			}
		};
	