var mongoose=require('mongoose');

var JuegoSchema = new mongoose.Schema({
	titulo:{type:String, required:true},
	estudio:String,
	genero:String,
	calificacion:Number,
	imagen:String,
	fav:Boolean

});

mongoose.model('Juegos',JuegoSchema,'juegos');
