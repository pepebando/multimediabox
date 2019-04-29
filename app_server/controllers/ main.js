var request = require('request');

var apiOptions = {
  server: "http://localhost:3000"
};
if (process.env.NODE_ENV === 'production'){
  apiOptions.server = "https://ladodelservidor.herokuapp.com/";
}
console.log('Server now running in'+process.env.NODE_ENV);

var renderArtistas = function (req, res, responseBody){
  var message;
  if (!(responseBody instanceof Array)){
    message = "API lookup error";
    responseBody = [];
  }else{
    if(!responseBody.length){
      message:"no data";
    }
  }
 res.render('artistas',{
    artistas:responseBody,
    message: message
    });
};

module.exports.artistasrender=function (req,res) {
  var requestOptions, path;
  path = '/api/artistas';// llamo a la funcion
  requestOptions = {
    url : apiOptions.server + path,
    method : "GET",
    json : {}

  };
  request (
    requestOptions,
    function(err, response, body){
      var data;
      data = body;
      renderArtistas(req, res, data);
    });
};
