import React, { useContext } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import { Songs } from '../context'

export default function Player() {
  const {song, handleSetSong} = useContext(Songs)

  const handleClickNext = () => handleSetSong(song.id + 1)
  const handleClickPrevious = () => handleSetSong(song.id - 1)

  return (
    <div>
        <AudioPlayer 
          src={song.url}
          className='bg-slate-900' 
          layout="stacked-reverse" 
          showSkipControls={true}
          showJumpControls={false}
          onClickNext={handleClickNext}
          onClickPrevious={handleClickPrevious}
          onEnded={handleClickNext}
        />
    </div>
  )
}
