import React from 'react'
import Image from 'next/image';
import {AiOutlineStar} from 'react-icons/ai'

const getMovie = async (id) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=7db3164a8800616ea25ba8dc7a29c817`)
  return await res.json();
}

const page = async ({ params }) => {

  const id = params.id;
  const movieDetail = await getMovie(id);


  console.log(movieDetail);



  return (
    <div className='relative p-7 min-h-screen'>
      <Image style={{ objectFit: "cover" }} alt='image' className='rounded-md' src={`https://image.tmdb.org/t/p/original/${movieDetail?.backdrop_path || movieDetail?.poster_path}`} fill />
      <div className='absolute '>
        <div className='my-3 text-white'>
          <span className='font-bold text-4xl'>{movieDetail?.title}</span> <span className='opacity-90 font-semibold text-lg mt-2 flex flex-row items-center'><AiOutlineStar className='mr-2' size={22}/>{movieDetail?.vote_average}</span>
        </div>
        <div className='text-base opacity-90 my-3 w-1/2 text-white'>
          {movieDetail?.overview}
        </div>
        <div className='text-sm opacity-90 my-3 text-white'>
          {movieDetail?.release_date}
        </div>
        <div className='border w-24 p-2 rounded-md text-center text-lg text-white cursor-pointer mt-10 hover:bg-white transition-all hover:text-black'>
          Trailer
        </div>
      </div>
    </div>
  )
}

export default page