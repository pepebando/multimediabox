module.exports.index=function(req,res){
    res.render('index', {title:'SPAM'});
};

module.exports.registro=function(req,res){
    res.render('Registro', {title:'Registro'});
};

module.exports.about=function(req,res){
    res.render('About', {title:'About'});
};

module.exports.settings=function(req,res){
    res.render('Settings', {title:'Settings'});
};

module.exports.favoritos=function(req,res){
    res.render('Favoritos', {title:'Catálago Películas'});
};

module.exports.favmusica=function(req,res){
    res.render('FavMusica', {title:'Catálago Música'});
};

module.exports.favseries=function(req,res){
    res.render('FavSeries', {title:'Catálago Series'});
};

module.exports.favlibros=function(req,res){
    res.render('FavLibros', {title:'Catálago Libros'});
};

module.exports.favjuegos=function(req,res){
    res.render('FavJuegos', {title:'Catálago Juegos'});
};
