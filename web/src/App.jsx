import { useEffect, useState } from 'react';
import './App.css'
import MainView from './components/mainView/MainView'
import YourLibrary from './components/yourLibrary/YourLibrary'
import * as SpotifyApi from './services/api.service';
import SearchBar from './components/searchBar/SearchBar';
import PlayBar from './components/playBar/PlayBar';

function App() {
  const [artists, setArtists] = useState([]);
  const [lists, setLists] = useState([]);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    async function fetch() {
      try {
        const  albumInfo  = await SpotifyApi.getAlbums()
        const  artistInfo  = await SpotifyApi.getArtists()
        
        console.log('LISiNFO', albumInfo.data.albums);
        setAlbums( albumInfo.data.albums );
        setArtists( artistInfo.data.artists );
      } catch (error) {
        console.error(error);
      } 
    }
    fetch();
  }, []);
  return (
    <>
      <div className="grid grid-cols-[250px_1fr_250px] grid-rows-[45px_1fr_60px] gap-y-[10px] gap-x-[10px] h-screen p-1.5">
        <div className="col-span-3 text-[#b3b3b3]"><SearchBar/></div>
        <div className='bg-[#121212] text-[#b3b3b3] rounded-md'>
          <YourLibrary artists={artists} lists={lists} albums={albums}/>
        </div>
        <div className="bg-[#121212] col-span-2 text-[#b3b3b3] rounded-md"><MainView/></div>
        <div className='col-span-3 text-[#b3b3b3]'><PlayBar/></div>
      </div>
    </>
  )
}

export default App
