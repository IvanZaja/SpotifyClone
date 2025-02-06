
function ArtistsList({ artists }) {
  return (
    <div>
        {artists.map((artist) => (
          <a href={`/artist/${artist.id}`} key={artist.id} className="flex items-center space-x-2 py-2">
            <img src={artist.images[2].url} alt={artist.name} className="w-8 h-8 rounded-full" />
            <h1 className="text-sm">{artist.name}</h1>
          </a>
        ))}
    </div>
  )
}

export default ArtistsList