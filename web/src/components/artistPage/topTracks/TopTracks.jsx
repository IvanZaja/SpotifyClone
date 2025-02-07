import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as SpotifyApi from '../../../services/api.service';

function TopTracks() {

    const { id } = useParams();
    const [topTracks, setTopTracks] = useState();
    const [showAllTracks, setShowAllTracks] = useState(false);

    useEffect(() => {
        function fetch() {
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

    const displayedTracks = showAllTracks ? topTracks : topTracks?.slice(0, 5);

    function formatDuration(durationMs) {
        const minutes = Math.floor(durationMs / 60000);
        const seconds = Math.floor((durationMs % 60000) / 1000);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    }

  return (
    <div>
        <ul className="my-3">
            {displayedTracks?.map((track) => (
            <li key={track.id} className="flex gap-2 items-center hover:bg-[#ffffff1a] p-2 rounded-md">
                <a href={track.external_urls.spotify}>▶️</a>
                <img className="rounded-md w-8" src={track.album.images[2].url} alt={track.name} />
                <div className="flex justify-between w-full">
                <p className="text-sm">{track.name}</p>
                <p>{formatDuration(track.duration_ms)}</p>
                </div>
            </li>
            ))}
        </ul>
        {topTracks?.length > 5 && (
            <button className="text-sm" onClick={() => setShowAllTracks(!showAllTracks)}>
                {showAllTracks ? 'Mostrar menos' : 'Mostrar más'}
            </button>
        )}
    </div>
  )
}

export default TopTracks