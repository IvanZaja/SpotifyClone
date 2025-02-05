import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as SpotifyApi from '../services/api.service';

function Artist() {
    const { id } = useParams();
    const [artist, setArtist] = useState();
    console.log(id);

    useEffect(() => {
        function fetch() {
          SpotifyApi.getArtist(id)
            .then((artistInfo) => {
              console.log('hola', artistInfo.data.name);
              setArtist(artistInfo);
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
        <h1>{artist}</h1>
    </div>
  )
}

export default Artist