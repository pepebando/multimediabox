var mongoose = require('mongoose');
var Art = mongoose.model('Artistas');


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


module.exports.ArtistasUpdateOne = function (req, res) {
	if (!req.params.artistasid) {
		sendJsonResponse(res, 404, {
		  "message": "id is required"
		});
		return;
	  }
	  Art.findById(req.params.artistasid).exec(
		  function(err, artista) {
			if (!artista) {
			  sendJsonResponse(res, 404, {
				"message": "id not found"
			  });
			  return;
			} else if (err) {
			  sendJsonResponse(res, 400, err);
			  return;
			}
      nombre: req.body.nombre,
    	profesion: req.body.profesion,
    	portafolio: req.body.portafolio,
    	foto: req.body.foto


			artista.save(function(err, artista) {
			  if (err) {
				sendJsonResponse(res, 404, err);
			  } else {
				sendJsonResponse(res, 200, artista);
			  }
			});
		  }
	  );
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