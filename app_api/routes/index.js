
var express = require ('express');
var router = express.Router();
var ctrlArtistas = require('../controllers/artistas');


router.get('/artistas', ctrlArtistas.ArtistasList);
router.post('/artistas',ctrlArtistas.ArtistasCreate);
router.get('/artistas/:artistasid',ctrlArtistas.ArtistasReadOne);
router.put('/artistas/:artistasid',ctrlArtistas.ArtistasUpdateOne);
router.delete('/artistas/:artistasid', ctrlArtistas.ArtistasDeleteOne);
