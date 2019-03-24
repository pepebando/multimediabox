var mongoose=require('mongoose');

var SerieSchema = new mongoose.Schema({
	titulo:{type:String, required:true},
	sinopsis:String,
	genero:String,
	fecha:Number,
  temporadas:Number,
  calificacion:Number,
	imagen:String,
	fav:Boolean

});

mongoose.model('Series',SerieSchema,'series');
