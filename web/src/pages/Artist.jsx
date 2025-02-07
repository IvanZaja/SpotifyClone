import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as SpotifyApi from '../services/api.service';
import TopTracks from "../components/artistPage/topTracks/TopTracks";
import ArtistAlbums from "../components/artistPage/artistAlbums/ArtistAlbums";

function Artist() {
    const { id } = useParams();
    const [artist, setArtist] = useState();

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
          <div className="pb-5 px-5 flex gap-3 items-center">
            <a>▶️</a>
            <a className={`px-[12px] py-[4px] text-[14px] border-[#ffffffa0] border-1 rounded-full`}>Siguiendo</a>
          </div>
          <div className="px-5">
            <h2 className="text-xl font-bold">Populares</h2>
            <TopTracks />
          </div>
          <div className="px-5 pt-5">
            <h2 className="text-xl font-bold">Albumes</h2>
            <ArtistAlbums />
          </div>
        </div>
        : <p>Loading...</p>}
    </div>
  )
}

export default Artist