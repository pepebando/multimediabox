var mongoose = require('mongoose');
var Peli = mongoose.model('Peliculas');
var Libr = mongoose.model('Libros');
var Ser = mongoose.model('Series');
var Jueg = mongoose.model('Juegos');
var Can = mongoose.model('Canciones');

// Peliculas

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
}
		//crear peliculas
module.exports.peliculasCreate = function (req, res) {
	console.log(req.body);
	Peli.create({
		titulo: req.body.titulo,
		sinopsis: req.body.sinopsis,
		director: req.body.director,
		duracion: req.body.duracion,
		calificacion: req.body.calificacion,
		imagen: req.body.imagen,
		fecha: req.body.fecha,
		fav: req.body.fav


	}, function(err,pelicula){
		if(err){
			console.log(err);
			sendJsonResponse(res,400,err);
		}else{
			console.log(pelicula);
			sendJsonResponse(res,201,pelicula);
		}
	}

	)};

				//listar peliculas
module.exports.peliculasList = function (req, res) {
	Peli
	  .find()
	  .exec(
	  	function(err, pelicula){
	  		if (!pelicula) {
          sendJsonResponse(res, 404, {
            "message": "peliculaid not found"
          });
          return;
        } else if (err) {
          sendJsonResponse(res, 400, err);
          return;
        }
        sendJsonResponse(res, 200, pelicula);
	  	});
	};


module.exports.peliculasUpdateOne = function (req, res) {
	if (!req.params.peliculaid) {
		sendJsonResponse(res, 404, {
		  "message": "Not found, peliculaid is required"
		});
		return;
	  }
	  Peli
		.findById(req.params.peliculaid)
		.exec(
		  function(err, pelicula) {
			if (!pelicula) {
			  sendJsonResponse(res, 404, {
				"message": "peliculaid not found"
			  });
			  return;
			} else if (err) {
			  sendJsonResponse(res, 400, err);
			  return;
			}
			pelicula.titulo = req.body.titulo;
			pelicula.sinopsis = req.body.sinopsis;
			pelicula.director= req.body.director;
			pelicula.duracion= req.body.duracion;
			pelicula.calificacion= req.body.calificacion;
			pelicula.imagen = req.body.imagen;
			pelicula.fecha = req.body.fecha;
			pelicula.fav = req.body.fav;


			pelicula.save(function(err, pelicula) {
			  if (err) {
				sendJsonResponse(res, 404, err);
			  } else {
				sendJsonResponse(res, 200, pelicula);
			  }
			});
		  }
	  );
	};


module.exports.peliculasDeleteOne = function (req, res) {
	var peliculaid = req.params.peliculaid;
	if (peliculaid) {
	  Peli
		.findByIdAndRemove(peliculaid)
		.exec(
		  function(err, pelicula) {
			if (err) {
			  console.log(err);
			  sendJsonResponse(res, 404, err);
			  return;
			}
			console.log("pelicula id " + peliculaid + " deleted");
			sendJsonResponse(res, 204, null);
		  }
	  );
	} else {
	  sendJsonResponse(res, 404, {
		"message": "No peliculaid"
	  });
	}
	};

	module.exports.peliculasReadOne = function(req, res){
		if (req.params && req.params.peliculaid){
			Peli
				.findById(req.params.peliculaid)
				.exec(function(err, pelicula){
					if(!pelicula){
						console.log(req.params.peliculaid);
						sendJsonResponse(res, 404, {
							"message": "peliculaid not found"
						});
						return;
					} else if(err){
						sendJsonResponse(res, 404, err);
						return;
					}
					sendJsonResponse(res, 200, pelicula);
				});
		}else{
			sendJsonResponse(res, 404, {
				"message": "No peliculaid in request"
			});
		}
	};


//libros
			//crear libros
	module.exports.librosCreate = function (req, res) {
		console.log(req.body);
		Libr.create({
			titulo: req.body.titulo,
			autor: req.body.autor,
			genero: req.body.genero,
			fecha: req.body.fecha,
			paginas: req.body.paginas,
			calificacion: req.body.calificacion,
			imagen: req.body.imagen,
			fav: req.body.fav

		}, function(err,libro){
			if(err){
				console.log(err);
				sendJsonResponse(res,400,err);
			}else{
				console.log(libro);
				sendJsonResponse(res,201,libro);
			}
		}

		)};

		//revisar libros
	module.exports.librosList = function (req, res) {
		Libr
	  .find()
	  .exec(
	  	function(err, libro){
	  		if (!libro) {
          sendJsonResponse(res, 404, {
            "message": "libro not found"
          });
          return;
        } else if (err) {
          sendJsonResponse(res, 400, err);
          return;
        }
        sendJsonResponse(res, 200, libro);

	  	});
		};

	module.exports.librosUpdateOne = function (req, res) {
		sendJsonResponse(res, 200,{"status":"success"});
		};
	module.exports.librosDeleteOne = function (req, res) {
				var libroid = req.params.libroid;
			if (libroid) {
				Libr
				.findByIdAndRemove(libroid)
				.exec(
					function(err, libro) {
					if (err) {
						console.log(err);
						sendJsonResponse(res, 404, err);
						return;
					}
					console.log("pelicula id " + libroid + " deleted");
					sendJsonResponse(res, 204, null);
					}
				);
			} else {
				sendJsonResponse(res, 404, {
				"message": "No peliculaid"
				});
			}
		};

		module.exports.librosReadOne = function(req, res){
			if (req.params && req.params.libroid){
				Libr
					.findById(req.params.libroid)
					.exec(function(err, libro){
						if(!libro){
							console.log(req.params.libroid);
							sendJsonResponse(res, 404, {
								"message": "libroid not found"
							});
							return;
						} else if(err){
							sendJsonResponse(res, 404, err);
							return;
						}
						sendJsonResponse(res, 200, libro);
					});
			}else{
				sendJsonResponse(res, 404, {
					"message": "No libroid in request"
				});
			}
		};

//Canciones
		//crear cancion
module.exports.cancionesCreate = function (req, res) {
	//sendJsonResponse(res, 200,{"status":"success"});
	console.log(req.body);
		Can.create({
			titulo: req.body.titulo,
			album: req.body.album,
			artista: req.body.artista,
			genero: req.body.genero,
			fecha: req.body.fecha,
			imagen:req.body.imagen,
			fav:req.body.fav

		}, function(err,cancion){
			if(err){
				console.log(err);
				sendJsonResponse(res,400,err);
			}else{
				console.log(cancion);
				sendJsonResponse(res,201,cancion);
			}
		}

		)
	};
	//listar cancion
module.exports.cancionesList = function (req, res) {
	//sendJsonResponse(res, 200,{"status":"success"});
	Can
	  .find()
	  .exec(
	  	function(err, cancion){
	  		if (!cancion) {
          sendJsonResponse(res, 404, {
            "message": "cancion not found"
          });
          return;
        } else if (err) {
          sendJsonResponse(res, 400, err);
          return;
        }
        sendJsonResponse(res, 200, cancion);

	  	});
	};

module.exports.cancionesUpdateOne = function (req, res) {

	if (!req.params.cancionid) {
		sendJsonResponse(res, 404, {
		  "message": "Not found, cancionid is required"
		});
		return;
	  }
	  Can
		.findById(req.params.cancionid)
		.exec(
		  function(err, cancion) {
			if (!cancion) {
			  sendJsonResponse(res, 404, {
				"message": "cancionid not found"
			  });
			  return;
			} else if (err) {
			  sendJsonResponse(res, 400, err);
			  return;
			}
			cancion.titulo = req.body.titulo;
			cancion.album = req.body.album;
			cancion.artista = req.body.artista;
			cancion.genero = req.body.genero;
			cancion.fecha = req.body.fecha;
			cancion.imagen = req.body.imagen;
			cancion.fav = req.body.fav;



			cancion.save(function(err, cancion) {
			  if (err) {
				sendJsonResponse(res, 404, err);
			  } else {
				sendJsonResponse(res, 200, cancion);
			  }
			});
		  }
	  );

	};
module.exports.cancionesDeleteOne = function (req, res) {
	sendJsonResponse(res, 200,{"status":"success"});
	};

	module.exports.cancionesReadOne = function(req, res){
		if (req.params && req.params.cancionid){
			Can
				.findById(req.params.cancionid)
				.exec(function(err, cancion){
					if(!cancion){
						console.log(req.params.cancionid);
						sendJsonResponse(res, 404, {
							"message": "cancionid not found"
						});
						return;
					} else if(err){
						sendJsonResponse(res, 404, err);
						return;
					}
					sendJsonResponse(res, 200, cancion);
				});
		}else{
			sendJsonResponse(res, 404, {
				"message": "No cancionid in request"
			});
		}
	};

	//Juegos

	// var sendJsonResponse = function(res, status, content){
	// 	res.status(status);
	// 	res.json(content);
	// }
	module.exports.juegosCreate = function (req, res) {
		console.log(req.body);
		Jueg.create({
			titulo: req.body.titulo,
			estudio: req.body.estudio,
			genero: req.body.genero,
			calificacion: req.body.calificacion,
			imagen:req.body.imagen,
			fav: req.body.fav

		}, function(err,juego){
			if(err){
				console.log(err);
				sendJsonResponse(res,400,err);
			}else{
				console.log(juego);
				sendJsonResponse(res,201,juego);
			}
		}

		)
		};

	module.exports.juegosList = function (req, res) {
		Jueg
	  .find()
	  .exec(
	  	function(err, juego){
	  		if (!juego) {
          sendJsonResponse(res, 404, {
            "message": "juego not found"
          });
          return;
        } else if (err) {
          sendJsonResponse(res, 400, err);
          return;
        }
        sendJsonResponse(res, 200, juego);

	  	});
		};

	module.exports.juegosUpdateOne = function (req, res) {
		sendJsonResponse(res, 200,{"status":"success"});
		};
	module.exports.juegosDeleteOne = function (req, res) {
		sendJsonResponse(res, 200,{"status":"success"});
		};

		module.exports.juegosReadOne = function(req, res){
			if (req.params && req.params.juegoid){
				Jueg
					.findById(req.params.juegoid)
					.exec(function(err, juego){
						if(!juego){
							console.log(req.params.juegoid);
							sendJsonResponse(res, 404, {
								"message": "juegoid not found"
							});
							return;
						} else if(err){
							sendJsonResponse(res, 404, err);
							return;
						}
						sendJsonResponse(res, 200, juego);
					});
			}else{
				sendJsonResponse(res, 404, {
					"message": "No juegoid in request"
				});
			}
		};


//Series

module.exports.seriesCreate = function (req, res) {
	console.log(req.body);
	Ser.create({
		titulo: req.body.titulo,
		sinopsis: req.body.sinopsis,
		genero: req.body.genero,
		fecha: req.body.fecha,
		temporadas: req.body.temporadas,
		calificacion: req.body.calificacion,
		iagen: req.body.iagen,
		fav: req.body.fav

	}, function(err,serie){
		if(err){
			console.log(err);
			sendJsonResponse(res,400,err);
		}else{
			console.log(serie);
			sendJsonResponse(res,201,serie);
		}
	}

	)};
	//listar todas las series
module.exports.seriesList = function (req, res) {
	Ser
	  .find()
	  .exec(
	  	function(err, serie){
	  		if (!serie) {
          sendJsonResponse(res, 404, {
            "message": "serie not found"
          });
          return;
        } else if (err) {
          sendJsonResponse(res, 400, err);
          return;
        }
        sendJsonResponse(res, 200, serie);

	  	});
	};

module.exports.seriesUpdateOne = function (req, res) {
	sendJsonResponse(res, 200,{"status":"success"});
	};
module.exports.seriesDeleteOne = function (req, res) {
	sendJsonResponse(res, 200,{"status":"success"});
	};

	module.exports.seriesReadOne = function(req, res){
		if (req.params && req.params.serieid){
			Ser
				.findById(req.params.serieid)
				.exec(function(err, serie){
					if(!serie){
						console.log(req.params.serieid);
						sendJsonResponse(res, 404, {
							"message": "serieid not found"
						});
						return;
					} else if(err){
						sendJsonResponse(res, 404, err);
						return;
					}
					sendJsonResponse(res, 200, serie);
				});
		}else{
			sendJsonResponse(res, 404, {
				"message": "No serieid in request"
			});
		}
	};
