/**
 * Component that shows the most popular movies.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.1
 */
import React, { lazy } from 'react'
const Movie = lazy(() => import('../movie/Movie'))

/**
 * Browse component of application.
 * 
 * @return {HTML} - Render start page with public recipes.
 */
export default function Popular (props) {
  if (props.movies) {
    return (
      <div className="trending-container">
        <h1 className="title">Trending</h1>
        <div className="trending">
          {props.movies.map(movie => (
            <Movie 
              title={movie.original_title} 
              posterPath={movie.poster_path} 
              id={movie.id} 
              className='trending-item'
              key={movie.id}
              />
          ))}
        </div>
      </div>
    )
  }
}
  