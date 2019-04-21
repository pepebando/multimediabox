var express = require('express');
var router = express.Router();
var ctrlMain=require('../controllers/main');
var apictrol= require('../controllers/controller');
/* GET home page. */

router.get('/artistas',apictrol.artistas);

var Home = require('../controllers/main.js');
router.get('/',Home.index);
var Blog = require('../controllers/main.js');
router.get('/blog',Blog.blog);
var Artista = require('../controllers/main.js');
router.get('/artistas',Artista.artistas);
module.exports = router;
