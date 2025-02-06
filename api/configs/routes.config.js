const express = require('express');
const router = express.Router();
const spotify = require('../controllers/spotify.controller');

router.get('/album/:id', spotify.getAlbum);
router.get('/albums/:id', spotify.getAlbums);
router.get('/artist/:id', spotify.getArtist);
router.get('/artists/:id', spotify.getArtists);
router.get('/artist/:id/top-tracks', spotify.getArtistTopTracks);



module.exports = router;