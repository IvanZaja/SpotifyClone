import { Route, Routes } from 'react-router-dom';
import Artist from '../../pages/Artist';

function MainView() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/artist/:id" element={<Artist/>} />
        <Route path="/album" element={<h1>Albums</h1>} />
        <Route path="/playlist" element={<h1>Playlists</h1>} />
      </Routes>
    </>
  )
}

export default MainView