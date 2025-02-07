import { useState } from "react";
import { useParams } from "react-router-dom";

function ArtistAlbums() {
    const { id } = useParams();
    const [albums, setAlbums] = useState();

  return (
    <div>ArtistAlbums</div>
  )
}

export default ArtistAlbums