
var express = require ('express');
var router = express.Router();
var ctrlArtistas = require('../controllers/main');
var ctrlEventos = require('../controllers/controladoreventos');

router.get('/artistas', ctrlArtistas.ArtistasList);
router.post('/artistas', ctrlArtistas.ArtistasCreate);
router.get('/artistas/:artistasid', ctrlArtistas.ArtistasReadOne);
router.delete('/artistas/:artistasid',ctrlArtistas.ArtistasDeleteOne);

router.get('/eventos', ctrlEventos.EventosList);
router.post('/eventos', ctrlEventos.EventosCreate);
router.get('/eventos/:eventosid', ctrlEventos.EventosReadOne);
router.delete('/eventos/:eventosid',ctrlEventos.EventosDeleteOne);
module.exports = router;
