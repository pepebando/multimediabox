var mongoose=require('mongoose');

var peliculaSchema = new mongoose.Schema({
	titulo:{type:String, required:true},
	sinopsis:String,
	director:String,
	duracion:Number,
	calificacion:Number,
	imagen:String,
	fecha:Number,
	fav:Boolean

});





mongoose.model('Peliculas',peliculaSchema,'peliculas');
