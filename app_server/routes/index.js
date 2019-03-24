var express = require('express');
//var mongoose = require('mongoose');
var router = express.Router();
var ctrlLocations = require('../controllers/peliculas');
var ctrlLocationsFav = require('../controllers/contollerfav');

router.get('/',ctrlLocations.peliculasS);
router.get('/home',ctrlLocations.peliculasS);
router.get('/favoritos',ctrlLocationsFav.peliculasfav);
router.get('/favmusica',ctrlLocationsFav.musicafav);
router.get('/favseries',ctrlLocationsFav.seriesfav);
router.get('/favlibros',ctrlLocationsFav.librosfav);
router.get('/favjuegos',ctrlLocationsFav.juegosfav);
//router.get('/',ctrlLocations.seriesS);
//router.get('/',ctrlLocations.librosS);
//router.get('/',ctrlLocations.juegosS);
//router.get('/',ctrlLocations.cancionesS);


var Home = require('../controllers/main.js');
router.get('/', Home.index);

var Home = require('../controllers/main.js');
router.get('/Home', Home.index);

var Registro = require('../controllers/main.js');
router.get('/registro', Registro.registro);

var About = require('../controllers/main.js');
router.get('/about', About.about);

var Settings = require('../controllers/main.js');
router.get('/settings', Settings.settings);

var Favoritos = require('../controllers/main.js');
router.get('/favoritos', Favoritos.favoritos);

module.exports=router;
