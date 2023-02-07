/**
 * Disover page of the application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */

import React, { lazy, useState, useEffect } from 'react'
import { discover, getGenres } from '../../lib/Discover'

const Side = lazy(() => import('../home/side/Side'))
const Search = lazy(() => import('../search/Search'))
const Movie = lazy(() => import('../home/browse/movie/Movie'))
const Loading = lazy(() => import('../loading/Loading'))
const Error500 = lazy(() => import('../error/Error500'))

/**
* Discover component of application.
* 
* @return {HTML} - Render the discover page.
*/
export default function Discover () {
    const [loading, setLoading] = useState(true)
    const [serverError, setServerError] = useState(null)
    const [result, setResult] = useState(null)
    const [genres, setGenres] = useState(null)
    useEffect(() => {
        let mounted = true
      
        const loadData = async () => {
          const response = await discover()
          setLoading(true)
          if (mounted) {
            if (response.error) {
              setServerError(true)
              console.error(response)
            } else {
              setLoading(false)
              setResult(response.data.results)
            }
          }
        }
      
        const loadGenres = async () => {
          const response = await getGenres()
          setLoading(true)
          if (mounted) {
            if (response.error) {
              setServerError(true)
              console.error(response)
            } else {
              setLoading(false)
              setGenres(response.data.genres)
            }
          }
        }
      
        loadData()
        loadGenres()
      
        return () => {
          mounted = false
        }
      }, [])
 
  if (serverError) {
    return <Error500 />
  } else if (loading) {
    return <Loading />
  }
  return (
    <div className="home-container">
      <Search/>
      <Side/>
      <div className="discover-container">
        <h1 className="title">Discover</h1>
        <div className="options-container">
            {genres && (
                genres.map(genre => (
                    <div className="discover-option">{genre.name}</div>
                ))
            )}
        </div>
        <div className="movies-container">
            {result && (
                result.map(movie => (
                    <Movie 
                    title={movie.original_title} 
                    posterPath={movie.poster_path}
                    id={movie.id} 
                    className='discover-item'
                    key={movie.id}
                    />
                ))
            )}
        </div>
      </div>

    </div>
  )
}
