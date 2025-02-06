import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as SpotifyApi from '../services/api.service';

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
        Artist
        {artist ? <h1>{artist.name}</h1> : <p>Loading...</p>}
    </div>
  )
}

export default Artist