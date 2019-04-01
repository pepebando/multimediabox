
var express = require ('express');
var router = express.Router();
var ctrlArtistas = require('../controllers/controlador');


router.get('/artistas', ctrlArtistas.ArtistasList);
router.post('/artistas', ctrlArtistas.ArtistasCreate);
router.get('/artistas/:artistasid', ctrlArtistas.ArtistasReadOne);
router.delete('/artistas/:artistasid',ctrlArtistas.ArtistasDeleteOne);


module.exports = router;
