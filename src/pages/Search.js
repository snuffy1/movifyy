import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { Card } from '../components/Card'
import { useFetch } from '../hooks/useFetch'

export const Search = ({apiPath}) => {
  const [searchParams] = useSearchParams()
  const queryTerm = searchParams.get('q')
  const {data:movies}= useFetch(apiPath,queryTerm)

  return (
    <main>
      <section className='max-w-7xl mx-auto py-7'>
      <div className='flex justify-start flex-wrap'>
        {movies.map((movie)=>(
          <Card key={movie.id} movie={movie}/>
        ))}
      </div>
     </section>
    </main>
  )
}
