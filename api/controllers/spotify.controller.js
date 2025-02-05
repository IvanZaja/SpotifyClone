const spotifyApi = require('../configs/spotify.config');
const user = require('../data/user.json');

module.exports.getArtist = (req, res, next) => {
    console.log('holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa');
    console.log(req.params.id);
    const  artistId  = req.params.id;
    
    spotifyApi.getArtist(artistId)
        .then(function(data) {
            console.log('Artist information', data.body);
            res.json(data.body);
        }, function(err) {
            console.error(err);
        });
}

module.exports.getArtists = (req, res, next) => {
    const  artistId  = user.artistsFollowed;
    spotifyApi.getArtists(artistId)
        .then(function(data) {
            console.log('Artist information', data.body);
            res.json(data.body);
        }, function(err) {
            console.error(err);
        });
}