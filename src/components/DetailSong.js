import React from 'react'
// import { Songs } from '../context'

export default function DetailSong() {
  return (
    <div className='col-span-1'>
      <h2 className='text-cyan-500 font-bold'>
        Now playing
      </h2>
      <h2 className='text-netural-400 text-2xl'>
        Sing me to sleep
      </h2>
      <div className='w-[240px] mr-auto ml-auto mt-10'>
        <img 
          className='w-full'
          alt='avatar'
          src='https://zmp3-photo-fbcrawler.zmdcdn.me/avatars/2/c/1/3/2c139949903f4a0cdbc39bb988be596e.jpg'
        />
      </div>
      <div className='flex justify-evenly items-center mt-10'>
      <img 
          className='w-[70px] rounded-full'
          alt='avatar'
          src='https://zmp3-photo-fbcrawler.zmdcdn.me/avatars/2/c/1/3/2c139949903f4a0cdbc39bb988be596e.jpg'
        />
        <span className='text-xl text-white'>Alan Walker</span>
      </div>
    </div>
  )
}
