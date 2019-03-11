module.exports.index=function(req,res){
  res.render('index',{title:'Home MultimediaBox'})
}

module.exports.blog=function(req,res){
  res.render('blog',{title:'Blog MultimediaBox'})
}

module.exports.artistas=function(req,res){
  res.render('artistas',{title:'Artistas MultimediaBox'})
}
