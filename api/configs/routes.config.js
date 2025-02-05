const express = require('express');
const router = express.Router();
const spotify = require('../controllers/spotify.controller');

router.get('/artist/:id', spotify.getArtist);
router.get('/artists/:id', spotify.getArtists);


module.exports = router;