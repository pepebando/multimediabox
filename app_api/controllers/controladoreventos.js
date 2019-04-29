var mongoose = require('mongoose');
var Eve = mongoose.model('Evento');

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
}

module.exports.EventosCreate = function (req, res) {
  console.log(req.body);
  Eve.create({
    nombreevento: req.body.nombre,
    fecha: req.body.profesion,
		descripcion:req.body.descripcion,
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
