/**
 * Movie info page of the application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */
import React, { lazy, useState, useEffect } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

import { getMovieInfo } from '../../lib/CommunicationAPI'
const Error500 = lazy(() => import('../error/Error500'))
const Side = lazy(() => import('../home/side/Side'))


/**
 * Movie info component of application.
 * 
 * @return {HTML} - Render start page with public recipes.
 */
 export default function MovieInfo (props) {
  const [data, setData] = useState(null)
  const [serverError, setServerError] = useState(null)

  useEffect(() => {
    let mounted = true

    const loadData = async () => {
      const path = window.location.pathname
      const id = path.split("/").pop()
      const response = await getMovieInfo(id)

      if (mounted) {
        if (response.status !== 200) {
          setServerError(true)
          console.error(response)
        } else {
          console.log(response.data)
          setData(response.data)
        }
      }
    }
    loadData()
    return () => {
      mounted = false
    }
  }, [])

  //  Loading icon if data is not fetched 
   if (!data) {
    // If server error render error compoent 500.
    if (serverError) {
      return <Error500 /> 
    }
    return (
      <div className="movie-info-container">
        <div className="loading">
          <ClipLoader color="red" size={80}/>
        </div>
      </div>
    )
  }
  
   return (
    <div className="home-container">
      <Side/>
    </div>
  )
 }
  