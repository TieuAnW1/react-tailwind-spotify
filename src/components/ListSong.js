import React, { useContext, useState, useEffect } from "react";
import { Songs } from "../context";

export default function ListSong() {
    const { DataSongs, handleSetSong, song } = useContext(Songs);
    const [idSong, setIdSong] = useState(0);

    const handlePlaySong = (idSong) => {
        setIdSong(idSong);
        handleSetSong(idSong);
    };

    useEffect(() => {
        setIdSong(song.id);
    }, [song]);

    return (
        <div className="col-span-2 overflow-y-scroll">
            <table className="table-auto w-full">
                <thead className="text-white h-12">
                    <tr className="sticky top-0 bg-slate-900 bg-opacity-60 ">
                        <th className="w-[5%] text-center">No</th>
                        <th className="text-left ml-2">Title</th>
                        <th className="w-[10%] text-left">Author</th>
                        <th className="w-[10%]">Download</th>
                    </tr>
                </thead>
                <tbody>
                    {DataSongs.map((song, index) => (
                        <tr
                            key={index}
                            className={`
                                h-12
                                bg-slate-800  
                                text-gray-600 
                                hover:bg-[#122639dc]
                                hover:text-gray-100 
                                hover:cursor-pointer
                                bg-opacity-80
                                ${
                                    idSong === song.id &&
                                    "text-sky-400 hover:text-sky-400"
                                }`}
                            onClick={() => handlePlaySong(song.id)}
                        >
                            <td className="text-center">{index + 1}</td>
                            <td className="text-left ml-2">{song.name}</td>
                            <td className="text-left">{song.author}</td>
                            <td className="text-center">
                                <a href={song.url}>
                                    <i className="fa fa-download"></i>
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
