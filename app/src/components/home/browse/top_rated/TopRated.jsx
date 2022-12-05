/**
 * Component that shows the top rated movies.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */

import React, { lazy } from 'react'
const Movie = lazy(() => import('../movie/Movie'))

/**
 * Top rated movies component of application.
 * 
 * @return {HTML} - Render start page with public recipes.
 */
 export default function Popular (props) {
  if (props.movies) {

    return (
      <>
      <h1 className="title">Top rated</h1>
        <div className="top_rated">
          {props.movies.map(movie => (
            <Movie 
              title={movie.original_title} 
              posterPath={movie.poster_path} 
              id={movie.id} 
              className='top_rated_item'
              key={movie.id}
              />
          ))}
        </div>
      </>
    )
  }
}
  