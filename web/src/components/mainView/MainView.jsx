import { Route, Routes } from 'react-router-dom';
import Artist from '../../pages/Artist';
import Playlist from '../../pages/Playlist';
import Album from '../../pages/Album';


function MainView() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/list/:id" element={<Playlist />} />
        <Route path="/artist/:id" element={<Artist/>} />
        <Route path="/album/:id" element={<Album/>} />
      </Routes>
    </>
  )
}

export default MainView