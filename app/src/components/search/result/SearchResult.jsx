/**
 * Component that movies based on search query.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */
import React, { lazy } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Search = lazy(() => import('../Search'))
const Side = lazy(() => import('../../home/side/Side'))
const Movie = lazy(() => import('../../home/browse/movie/Movie'))

/**
 * Browse component of application.
 * 
 * @return {HTML} - Render start page with public recipes.
 */
export default function SearchResult () {
    const data = useLocation().state

    if (data.result) {
        const result = data.result

        return (
            <div className="search-container">
                <Search/>
                <Side/>
                <div className="search-result">
                    <h1 className="title">Results</h1>
                    <div className="search-movies">
                        {result.map(movie => (
                        <Movie 
                            title={movie.original_title} 
                            posterPath={movie.poster_path}
                            id={movie.id} 
                            className='search-item'
                            key={movie.id}
                            />
                        ))}
                    </div>
                </div>
                        
            </div>
        )
    }   
}
  