import { ThumbUpIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'
import { forwardRef } from 'react'

const MovieCard = forwardRef(({result}, ref) => {
  const BASE_URL = "https://image.tmdb.org/t/p/original/"
  return (
    <div ref={ref} className='p2 group cursor-pointer transition duration-200 
         ease-in transform sm:hover:scale-105 hover:z-50 my-2'>
      <Image
        layout='responsive'
        width={1920}
        height={1080}
        src={
           `${BASE_URL}${result.backdrop_path || result.poster_path}`
            || `${BASE_URL}${result.poster_path}`
        }
      />
      <div>
        <p className='truncate max-w-md'>{result.overview}</p>
        <h2 className='mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold '>
          {result.title || result.original_name}
        </h2>
        <p className='flex items-center opacity-0 group-hover:opacity-100 '>
          <ThumbUpIcon className='h-5 mx-2'/> {result.vote_count}
        </p>
      </div>
    </div>
  )
})

export default MovieCard
