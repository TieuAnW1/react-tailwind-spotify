import React, { useContext } from "react";
import { Songs } from "../context";

export default function DetailSong() {
    const { song } = useContext(Songs);

    return (
        <div className="col-span-1">
            <h2 className="text-cyan-500 font-bold mt-2">
                Now playing
            </h2>
            <h2 className="text-sky-300 text-2xl mt-3 font-bold">
                {song.name}
            </h2>
            <div className="w-[320px] mr-auto ml-auto mt-6 ">
                <img
                    className="w-full rounded-full bg-gradient-to-br p-[4px] from-[#6cc4fa] via-[#617efe] to-[#c080fd]"
                    alt="avatar"
                    src={require("../images/alan-walker-logo.png")}
                />
            </div>
            <div className="flex justify-evenly items-center mt-6">
                <img
                    className="w-[100px] rounded-full bg-gradient-to-br p-[2px] from-[#6cc4fa] via-[#617efe] to-[#c080fd]"
                    alt="avatar"
                    // src='https://data.chiasenhac.com/data/cover/166/165875.jpg'
                    src={song.links.images[0].url}
                />
                <span className="text-xl text-white">
                    {song.author}
                </span>
            </div>
        </div>
    );
}
