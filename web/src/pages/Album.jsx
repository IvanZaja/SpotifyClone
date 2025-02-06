import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as SpotifyApi from '../services/api.service';

function Album() {
  const { id } = useParams();
    const [album, setAlbum] = useState();

    useEffect(() => {
        function fetch() {
          SpotifyApi.getAlbum(id)
            .then((albumInfo) => {
              console.log('hola', albumInfo);
              setAlbum(albumInfo.data);
            })
            .catch((error) => {
              console.error(error);
            });
        }
        fetch();
      }, [id]);
  return (
    <div>
      Album
      {album ? 
      <div>
        <h1>{album.name}</h1> 
        <img src={album.images[1].url} alt={album.name} />
      </div>
      : <p>Loading...</p>}
    </div>
  )
}

export default Album