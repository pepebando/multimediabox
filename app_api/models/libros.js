var mongoose=require('mongoose');

var libroSchema = new mongoose.Schema({
	titulo:{type:String, required:true},
	autor:String,
	genero:String,
	fecha:Number,
	paginas:Number,
	calificacion:Number,
	imagen:String,
	fav:Boolean
});

mongoose.model('Libros',libroSchema,'libros');
