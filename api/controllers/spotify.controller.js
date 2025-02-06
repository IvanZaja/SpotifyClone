const spotifyApi = require('../configs/spotify.config');
const user = require('../data/user.json');

module.exports.getArtist = (req, res, next) => {
    const  artistId  = req.params.id;
    
    spotifyApi.getArtist(artistId)
        .then(function(data) {
            res.json(data.body);
        }, function(err) {
            console.error(err);
        });
}

module.exports.getArtists = (req, res, next) => {
    const  artistId  = user.artistsFollowed;
    spotifyApi.getArtists(artistId)
        .then(function(data) {
            res.json(data.body);
        }, function(err) {
            console.error(err);
        });
}

module.exports.getArtistTopTracks = (req, res, next) => {
    const  artistId  = req.params.id;
    
    spotifyApi.getArtistTopTracks(artistId)
        .then(function(data) {
            res.json(data.body);
        }, function(err) {
            console.error(err);
        });
}



module.exports.getAlbum = (req, res, next) => {
    const  albumId  = req.params.id;
    
    spotifyApi.getAlbum(albumId)
        .then(function(data) {
            res.json(data.body);
        }, function(err) {
            console.error(err);
        });
}

module.exports.getAlbums = (req, res, next) => {
    const  albumId  = user.albumsFollowed;
    spotifyApi.getAlbums(albumId)
        .then(function(data) {
            console.log('ALBUMS', data.body);
            res.json(data.body);
        }, function(err) {
            console.error(err);
        });
}