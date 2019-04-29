var mongoose=require('mongoose');

var EventoSchema = new mongoose.Schema({
	nombreevento:{type:String, required:true},
	fecha:String,
	descripcion:String,
	foto:String
});

mongoose.model('Evento',EventoSchema,'eventos');
