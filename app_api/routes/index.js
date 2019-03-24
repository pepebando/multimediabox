
var express = require ('express');
var router = express.Router();
var ctrlPeliculas = require('../controllers/peliculas');
var ctrlLibros = require('../controllers/peliculas');
var ctrlCanciones = require('../controllers/peliculas');
var ctrlJuegos = require('../controllers/peliculas');
var ctrlSeries = require('../controllers/peliculas');


//router.get('/todo', ctrlPeliculas.peliculasList);

//Peliculas
router.get('/peliculas', ctrlPeliculas.peliculasList);
router.post('/peliculas',ctrlPeliculas.peliculasCreate);
router.get('/peliculas/:peliculaid',ctrlPeliculas.peliculasReadOne);
router.put('/peliculas/:peliculaid',ctrlPeliculas.peliculasUpdateOne);
router.delete('/peliculas/:peliculaid', ctrlPeliculas.peliculasDeleteOne);

//Libros

router.get('/libros', ctrlLibros.librosList);
router.post('/libros',ctrlLibros.librosCreate);
router.get('/libros/:libroid',ctrlLibros.librosReadOne);
router.put('/libros/:libroid',ctrlLibros.librosUpdateOne);
router.delete('/libros/:libroid', ctrlLibros.librosDeleteOne);

//Canciones

router.get('/canciones', ctrlCanciones.cancionesList);
router.post('/canciones',ctrlCanciones.cancionesCreate);
router.get('/canciones/:cancionid',ctrlCanciones.cancionesReadOne);
router.put('/canciones/:cancionid',ctrlCanciones.cancionesUpdateOne);
router.delete('/canciones/:cancionid', ctrlCanciones.cancionesDeleteOne);

//series

router.get('/series', ctrlSeries.seriesList);
router.post('/series',ctrlSeries.seriesCreate);
router.get('/series/:serieid',ctrlSeries.seriesReadOne);
router.put('/series/:serieid',ctrlSeries.seriesUpdateOne);
router.delete('/series/:serieid', ctrlSeries.seriesDeleteOne);

//juegos

router.get('/juegos', ctrlJuegos.juegosList);
router.post('/juegos',ctrlJuegos.juegosCreate);
router.get('/juegos/:juegoid',ctrlJuegos.juegosReadOne);
router.put('/juegos/:juegoid',ctrlJuegos.juegosUpdateOne);
router.delete('/juegos/:juegoid', ctrlJuegos.juegosDeleteOne);


module.exports = router;