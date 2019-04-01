var mongoose=require('mongoose');

var ArtSchema = new mongoose.Schema({
	nombre:{type:String, required:true},
	profesion:String,
	portafolio:String,
	foto:String
});

mongoose.model('Artista',ArtSchema,'artistas');
