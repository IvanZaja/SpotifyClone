import { useState } from "react"
import ArtistsList from "./artistsList/ArtistsList"
import ListsList from "./listsList/ListsList"
import AlbumsList from "./albumsList/AlbumsList"

function YourLibrary({ artists, albums }) {

  const [selected, setSelected] = useState('Artistas')

  return (
    <div className="p-2 flex flex-col gap-2">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl">Tu biblioteca</h1>
        <div>
          <a>+</a>
          <a>➡️</a>
        </div>
      </div>
      <div className="flex gap-2">
        <a className={`px-[12px] py-[4px] text-[14px] bg-[#ffffff1a] rounded-full ${selected === 'Artistas' ? 'bg-[#ffffff3a]' : ''}`} 
          onClick={() => setSelected('Artistas')}>Artistas</a>
        <a className={`px-[12px] py-[4px] text-[14px] bg-[#ffffff1a] rounded-full ${selected === 'Albumes' ? 'bg-[#ffffff3a]' : ''}`}
          onClick={() => setSelected('Albumes')}>Albumes</a>
      </div>
      <div className="flex justify-between">
        <a>🔍</a> 
        <a>Recientes</a>
      </div>
      <div>
        {selected === 'Artistas' && <ArtistsList artists={artists} />}
        {selected === 'Albumes' && <AlbumsList albums={albums}/>}
      </div>
    </div>
  )
}

export default YourLibrary