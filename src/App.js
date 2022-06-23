import "./App.css";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import Navbar from "./components/Navbar";
import Player from "./components/Player";
import { Songs } from "./context";
import DataSongs from "./data/songs.json";
import { useState } from "react";

function App() {
    const [song, setSong] = useState(DataSongs[0]);

    const handleSetSong = (idSong) => {
        const song = DataSongs.find(
            (song) => song.id === idSong
        );
        if (!song) setSong(DataSongs[DataSongs.length - 1]);
        else setSong(song);
    };

    return (
        <div className="App">
            <Songs.Provider
                value={{ DataSongs, song, handleSetSong }}
            >
                <Navbar />
                <div className='bg-[url("https://cdn.pixabay.com/photo/2017/08/24/03/41/starry-sky-2675322_960_720.jpg")]'>
                    <div className="grid grid-cols-3 h-screen-navbar-player bg-slate-700 bg-opacity-60">
                        <DetailSong />
                        <ListSong />
                    </div>
                </div>
                <Player />
            </Songs.Provider>
        </div>
    );
}

export default App;
