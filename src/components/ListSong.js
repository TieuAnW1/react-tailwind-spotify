import React, { useContext, useState } from 'react'
import { Songs } from '../context'

export default function ListSong() {
  const {DataSongs, handleSetSong} = useContext(Songs)
  const [idSong, setIdSong] = useState(0)
  const handlePlaySong = (idSong) => {
    setIdSong(idSong)
    handleSetSong(idSong)
  }
  return (
    <div className='col-span-2 overflow-y-scroll'>
        <table className='table-auto w-full'>
          <thead className='text-white h-12'>
            <tr>
              <th className='w-[5%] text-center'>No</th>
              <th className='text-left ml-2'>Title</th>
              <th className='w-[10%] text-left'>Author</th>
              <th className='w-[10%]'>Download</th>
            </tr>
          </thead>
          <tbody>
            {DataSongs.map((song, index) =>(
              <tr 
                key={index}
                className={`
                  h-12
                  bg-slate-800  
                  text-gray-600 
                  hover:bg-gray-700 
                  hover:text-gray-100 
                  hover:cursor-pointer
                  ${idSong === song.id && 'text-teal-400 hover:text-teal-400'}`
                }
                onClick={() => handlePlaySong(song.id)}
              >
                <td className='text-center'>{index + 1}</td>
                <td className='text-left ml-2'>{song.name}</td>
                <td className='text-left'>{song.author}</td>
                <td className='text-center'>
                  <a href={song.url}>
                    <i className='fa fa-download'></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}
