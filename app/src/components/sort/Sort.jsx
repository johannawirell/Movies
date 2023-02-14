/**
 * Component that sorts movies.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */
import React, { lazy, useState, useEffect } from 'react'
import { getMoviesSortedBy } from '../../lib/Discover.js'
const Loading = lazy(() => import('../loading/Loading'))
const Error500 = lazy(() => import('../error/Error500'))
const Side = lazy(() => import('../home/side/Side'))
const Search = lazy(() => import('../search/Search'))
const Movie = lazy(() => import('../home/browse/movie/Movie'))

/**
 * Sort component of application.
 * 
 * @return {HTML} - Render start page with public recipes.
 */
export default function Sort () {
    const [loading, setLoading] = useState(true)
    const [serverError, setServerError] = useState(false)
    const [movies, setMovies] = useState(null)
    const [sortBy, setSortBy] = useState('imdb')

    useEffect(() => {
        let mounted = true
        setLoading(true)
        const loadData = async () => {
            const response = await getMoviesSortedBy(sortBy)
      
            if (mounted) {
                if (response.error) {
                  setServerError(true)
                  console.error(response)
                } else {
                  setLoading(false)
                  setMovies(response.data.results)
                }
              }
          }

          loadData()
        return () => {
          mounted = false
        }
    }, [sortBy])

    
    if (serverError) {
        return <Error500 />
      } else if (loading) {
        return <Loading />
    }


    return (
    <div className="home-container">
        <Search/>
        <Side/>
        <div className="sort-container">
            <div className="sort-options">
                <label className="title" htmlFor="dropdown">Sort by:</label>
                <select 
                    className="dropdown"
                    defaultValue={sortBy}
                    onChange={(event) => setSortBy(event.target.value)}
                >
                    <option value="imdb">IMDB</option>
                    <option value="release_date">Release date</option>
                    <option value="popularity">Popularity</option>
                </select>
            </div>
            <div className="list-movies">
            {movies.map(movie => (
              <Movie 
                title={movie.original_title} 
                posterPath={movie.poster_path}
                id={movie.id} 
                className='top-rated-item'
                key={movie.id}
                />
            ))}
            </div>
        </div>
      </div>
    
    )
}
  