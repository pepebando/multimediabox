var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main')


router.get('/artistas',ctrlMain.artistasrender);
/*
router.get('/',ctrlMain.index);
router.get('/blog',ctrlMain.blog);*/

module.exports = router;
