/**
 * Home page of the application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.2
 */

import React, { lazy, useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

import { getMovies } from '../../lib/CommunicationAPI'
const Side = lazy(() => import('./side/Side'))
const Browse = lazy(() => import('./browse/Browse'))
const Error500 = lazy(() => import('../error/Error500'))

/**
* Home component of application.
* 
* @return {HTML} - Render start page with public recipes.
*/
export default function Home () {
  const [popularMovies, setPopularMovies] = useState(null)
  const [topRatedMovies, setTopRatedMovies] = useState(null)
  const [serverError, setServerError] = useState(null)

  useEffect(() => {
    let mounted = true

    const loadData = async () => {
      const response = await getMovies()

      if (mounted) {
        if (response.error) {
          setServerError(true)
          console.error(response)
        } else {
          setPopularMovies(response.popularMovies.results)
          setTopRatedMovies(response.topMovies.results)
        }
      }
    }
    loadData()
    return () => {
      mounted = false
    }
  }, [])

  // Loading icon if data is not fetched 
  if (!popularMovies || !topRatedMovies) {
    // If server error render error compoent 500.
    if (serverError) {
      return <Error500 /> 
    }
    return (
      <div className="home-container">
        <div className="loading">
          <ClipLoader color="red" size={80}/>
        </div>
      </div>
    )
  }

  return (
    <div className="home-container">
      <Side/>
      <Browse top={topRatedMovies} popular={popularMovies}/>
    </div>
  )
}
