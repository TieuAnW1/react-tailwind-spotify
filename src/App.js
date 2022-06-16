import './App.css';
import DetailSong from './components/DetailSong';
import ListSong from './components/ListSong';
import Navbar from './components/Navbar';
import Player from './components/Player';
import { Songs } from './context';
import DataSongs from "./data/songs.json"
import { useState } from 'react';

function App() {
  const [song, setSong] = useState(DataSongs[0])
  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    setSong(song)
    console.log(setSong);
  }
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar/>
        <div className='grid grid-cols-3 bg-slate-700 h-screen-navbar-player'>
          <DetailSong />
          <ListSong />
        </div>
        <Player />
      </Songs.Provider>
    </div>
  );
}

export default App;
