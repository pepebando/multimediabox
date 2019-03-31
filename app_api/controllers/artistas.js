var mongoose=require('mongoose');

var ArtistasSchema = new mongoose.Schema({
	nombre:{type:String, required:true},
	profesion:{String, required:true},
	portafolio:String,
	foto:String
});

mongoose.model('Artista',ArtistasSchema,'artistas');
