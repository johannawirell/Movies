/**
 * Home page of the application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.1
 */

import React, { lazy, useState, useEffect } from 'react'

import { getPopularMovies } from '../../lib/CommunicationAPI'
const Side = lazy(() => import('./side/Side'))
const Browse = lazy(() => import('./browse/Browse'))
const Error500 = lazy(() => import('../error/Error500'))

/**
* Home component of application.
* 
* @return {HTML} - Render start page with public recipes.
*/
export default function Home () {
  const [movies, setMovies] = useState(null)
  const [serverError, setServerError] = useState(null)

  useEffect(() => {
    let mounted = true

    const loadData = async () => {
      const response = await getPopularMovies()
      if (mounted) {
        if (response.status === 200) {
          setMovies(response.data)
        } else {
          setServerError(true)
        }
      }
    }
    loadData()
    return () => {
      mounted = false
    }
  }, [])

  // Loading icon if data is not fetched 
  if (!movies) {
    // If server error render error compoent 500.
    if (serverError) {
      return <Error500 />
    }
    return (
      <div className="loading">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="home-container">
      <Side/>
      <Browse/>
    </div>
  )
}
 