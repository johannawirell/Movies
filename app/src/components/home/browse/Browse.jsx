/**
 * Component that shows the movies.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.1
 */
import React, { lazy } from 'react'

const Popular = lazy(() => import('./popular/Popular'))
const TopRated = lazy(() => import('./top_rated/TopRated'))

/**
 * Browse component of application.
 * 
 * @return {HTML} - Render start page with public recipes.
 */
export default function Browse (props) {
  if (props) {
    const popularMovies = props.popular
    const topMovies = props.top

    if (popularMovies && topMovies) {
      return (
        <div className="list-movies">
          <Popular movies={popularMovies}/>
          {/* <Popular movies={popularMovies}/>
          <TopRated movies={topMovies}/> */}
       </div>
      )
    }
  } 
}
  