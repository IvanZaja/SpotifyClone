
function AlbumsList({ albums }) {
  return (
    <div>
        {albums.map((album) => (
          <a href={`/album/${album.id}`} key={album.id} className="flex items-center space-x-2 py-2">
            <img src={album.images[2].url} alt={album.name} className="w-8 h-8 rounded-full" />
            <h1 className="text-sm">{album.name}</h1>
          </a>
        ))}
    </div>
  )
}

export default AlbumsList