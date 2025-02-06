import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as SpotifyApi from '../services/api.service';

function Artist() {
    const { id } = useParams();
    const [artist, setArtist] = useState();
    const [topTracks, setTopTracks] = useState();

    useEffect(() => {
        function fetch() {
          SpotifyApi.getArtist(id)
            .then((artistInfo) => {
              console.log('hola', artistInfo);
              setArtist(artistInfo.data);
            })
            .catch((error) => {
              console.error(error);
            });
          SpotifyApi.getArtistTopTracks(id)
            .then((topTracksInfo) => {
              console.log('TOP', topTracksInfo.data.tracks);
              setTopTracks(topTracksInfo.data.tracks);
            })
            .catch((error) => {
              console.error(error);
            });
        }
        fetch();
      }, [id]);

  return (
    <div>
        {artist ? 
        <div>
          <div className="py-10 px-5 gap-3 flex flex-col">
            <p>✔️ Artista verificado</p>
            <h1 className="text-white text-6xl">{artist.name}</h1>
            <p>{artist.followers.total} oyentes mensuales</p>
          </div>
          <div className="px-5">
            <h2 className="mb-3">Populares</h2>
            <ul className="px-2">
              {topTracks && topTracks.map((track) => (
                <li key={track.id} className="flex gap-2 items-center">
                  <a href={track.external_urls.spotify}>▶️</a>
                  <img className="rounded-md w-8" src={track.album.images[2].url} alt={track.name} />
                  <div>
                    <p className="text-sm">{track.name}</p>
                  </div>
                </li>))}
            </ul>
          </div>
        </div>
        : <p>Loading...</p>}
    </div>
  )
}

export default Artist