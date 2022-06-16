import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import { Songs } from '../context'

export default function Player() {
  const {song} = useContext(Songs)
  console.log(song.url);
  return (
    <div>
        <AudioPlayer 
          src={song.url}
          className='bg-slate-900' 
          layout="stacked-reverse" 
          showSkipControls={true}
          showJumpControls={false}
        />
    </div>
  )
}
