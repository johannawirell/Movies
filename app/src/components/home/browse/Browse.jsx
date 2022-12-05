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
export default function Browse () {
  return (
    <div className="list-movies">
      <Popular/>
      <TopRated/>
    </div>
  )
}
  