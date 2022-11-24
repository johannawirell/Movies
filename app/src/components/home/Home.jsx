/**
 * Home page of the application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.2
 */

import React, { lazy, useState, useEffect } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

import { getPopularMovies, getTopRatedMovies } from '../../lib/CommunicationAPI'
const Side = lazy(() => import('./side/Side'))
const Browse = lazy(() => import('./browse/Browse'))
const Error500 = lazy(() => import('../error/Error500'))

/**
* Home component of application.
* 
* @return {HTML} - Render start page with public recipes.
*/
export default function Home () {
  const setReady = () => {
    console.log('READY')
  }
  // const [popularMovies, setPopularMovies] = useState(null)
  // const [topRatedMovies, setTopRatedMovies] = useState(null)
  // const [serverError, setServerError] = useState(null)

  // useEffect(() => {
  //   let mounted = true

  //   const loadData = async () => {
  //     const responsePopular = await getPopularMovies()
  //     const responseTop = await getTopRatedMovies()

  //     if (mounted) {
  //       console.log(responseTop)
  //       if (responsePopular.status === 200 && topRatedMovies.status === 200) {
  //         setPopularMovies(responsePopular.data.results)
  //         setTopRatedMovies(responseTop.data.results)
  //       } else {
  //         setServerError(true)
  //       }
  //     }
  //   }
  //   loadData()
  //   return () => {
  //     mounted = false
  //   }
  // }, [])

  // // Loading icon if data is not fetched 
  // if (!popularMovies || !topRatedMovies) {
  //   // If server error render error compoent 500.
  //   if (serverError) {
  //     return <Error500 />
  //   }
  //   return (
  //     <div className="home-container">
  //       <div className="loading">
  //         <ClipLoader color="red" size={80}/>
  //       </div>
  //     </div>
  //   )
  // }

  return (
    <div className="home-container">
      <Side/>
      <Browse setReady={setReady}/>
    </div>
  )
}
 