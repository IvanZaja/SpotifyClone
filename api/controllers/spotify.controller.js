const spotifyApi = require('../configs/spotify.config');
const user = require('../data/user.json');

module.exports.getList = (req, res, next) => {
    const  listId  = req.params.id;
    
    spotifyApi.getPlaylist(listId)
        .then(function(data) {
            res.json(data.body);
        }, function(err) {
            console.error(err);
        });
}

module.exports.getLists = (req, res, next) => {
    const  listId  = user.playlistsFollowed;
    console.log(listId);
    spotifyApi.getPlaylist(listId)
        .then(function(data) {
            console.log(listId);
            res.json(data.body);
        }, function(err) {
            console.error(err);
        });
}

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