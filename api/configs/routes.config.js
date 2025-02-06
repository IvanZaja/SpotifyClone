const express = require('express');
const router = express.Router();
const spotify = require('../controllers/spotify.controller');

router.get('/list/:id', spotify.getList);
router.get('/lists/:id', spotify.getLists);
router.get('/artist/:id', spotify.getArtist);
router.get('/artists/:id', spotify.getArtists);
router.get('/album/:id', spotify.getAlbum);
router.get('/albums/:id', spotify.getAlbums);



module.exports = router;