import React from 'react'
import Movies from '@/Components/Movies';

const Page = async ({ params }) => {
    const keyword = params.keyword;

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=7db3164a8800616ea25ba8dc7a29c817&query=${keyword}&language=en-US&include_adult=false`)
    const data = await res.json();

    console.log(data?.results);
    return (
        <div>
            {
                !data?.results ?
                    <div>Aranılan şey bulunamadı</div> :
                    <div className='flex items-center flex-wrap gap-2'>
                        {
                            data?.results.map((dt, i) => {
                                return (
                                    <Movies key={i} dt={dt} />
                                )
                            })
                        }
                    </div>
            }
        </div>
    )
}

export default Page