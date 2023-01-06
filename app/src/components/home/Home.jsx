/**
 * Home page of the application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.2
 */

import React, { lazy, useState, useEffect } from 'react'
import { getMovies } from '../../lib/CommunicationAPI'

const Loading = lazy(() => import('../loading/Loading'))
const Side = lazy(() => import('./side/Side'))
const Browse = lazy(() => import('./browse/Browse'))
const Search = lazy(() => import('./search/Search'))
const Error500 = lazy(() => import('../error/Error500'))

/**
* Home component of application.
* 
* @return {HTML} - Render the start page.
*/
export default function Home () {
  const [loading, setLoading] = useState(true)
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
          setLoading(false)
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

  // If server error render error compoent 500.
  if (serverError) {
    return <Error500 />
  } else if (loading) {
    return <Loading />
  }

  return (
    <div className="home-container">
      <Search/>
      <Side/>
      <Browse top={topRatedMovies} popular={popularMovies}/>
    </div>
  )
}
