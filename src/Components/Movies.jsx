"use client"
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

const Movies = ({ dt }) => {

  const router = useRouter();

  console.log(dt);
  return (
    <div onClick={() => {
      router.push(`/movie/${dt.id}`)
    }} className='min-w-[450px] h-[300px] relative imgContainer cursor-pointer'>
      <Image style={{objectFit: "cover"}} alt='image' className='rounded-md' src={`https://image.tmdb.org/t/p/original/${dt?.backdrop_path || dt?.poster_path}`} width={450} height={300} />
      <div className='absolute bottom-16 ml-4 p-2 w-full h-full flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity'>
        <div id='card' className=''>
          <div className='text-2xl font-bold text-white'>
            { dt?.title }
          </div>
          <div className='text-lg text-white'>
            {dt?.release_date} - {dt?.vote_average}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Movies