var mongoose=require('mongoose');

var ArtSchema = new mongoose.Schema({
	nombre:{type:String, required:true},
	profesion:{type:String, required:true},
	portafolio:String,
	foto:String
});

mongoose.model('Artistas',ArtSchema,'artistas');
