import React from 'react'
import {useParams} from 'react-router-dom'


import Spinner from './Spinner'

import { useMovieFetch } from '../hooks/useMovieFetch'
import NavBar from './NavBar'
import MovieInfo from './MovieInfo'

const Movie = () => {
  const {movieID} = useParams();
  const {state: movie, loading, error} = useMovieFetch(movieID)
  if(loading) return <Spinner />
  if (error) return <div>Something went wrong...</div>
  return (
    <>
    <div>
      <NavBar movieTitle={movie.original_title} />
      <MovieInfo movie={movie} />
    </div>

    </>
  )
}

export default Movie
