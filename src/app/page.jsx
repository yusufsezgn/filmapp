import Movies from '@/Components/Movies';
import React from 'react'

const Page = async({ searchParams }) => {

  const res = await fetch(`https://api.themoviedb.org/3/${searchParams.genre ? "/movie/" + searchParams.genre : "trending/all/day"}?api_key=7db3164a8800616ea25ba8dc7a29c817&language=en-US&page=1`,
  {next: {revalidate: 10000}});
  
  const data = await res.json();

  console.log(data);
  return (
    <div className='flex items-center flex-wrap gap-3 justify-center mt-10'>
      {
        data?.results.map((dt, i) => {
          return (
            <Movies key={i} dt={dt}/>
          )
        })
      }
    </div>
  )
}

export default Page