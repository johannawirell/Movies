/**
 * Movie info page of the application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */
import React, { lazy, useState, useEffect } from 'react'
import { getMovieInfo } from '../../lib/CommunicationAPI'

const Loading = lazy(() => import('../loading/Loading'))
const Error500 = lazy(() => import('../error/Error500'))
const Side = lazy(() => import('../home/side/Side'))
const Trailer = lazy(() => import('./trailer/Trailer'))


/**
 * Movie info component of application.
 * 
 * @return {HTML} - Render start page with public recipes.
 */
 export default function MovieInfo (props) {
  const [data, setData] = useState(null)
  const [year, setYear] = useState(null)
  const [loading, setLoading] = useState(true)
  const [serverError, setServerError] = useState(null)

  useEffect(() => {
    let mounted = true

    const loadData = async () => {
      const path = window.location.pathname
      const id = path.split('/').pop()
      const response = await getMovieInfo(id)

      if (mounted) {
        if (response.status !== 200) {
          setServerError(true)
          console.error(response)
        } else {
          setLoading(false)
          setData(response.data)
          setYear(response.data.release_date.split('-').shift())
        }
      }
    }
    loadData()
    return () => {
      mounted = false
    }
  }, [])

  const toHoursAndMinutes = totalMinutes => {
    let result = ''
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60
    if (hours > 0) {
      result += `${hours} h`
    }
    if (minutes > 0) {
      result += `${minutes} min`
    }

    return result
  }

  if (serverError) {
    return <Error500/>
  } else if (loading) {
    return <Loading/>
  }
  
   return (
    <div className="home-container">
      <Side/>
      <div className="movie-info-container">
        <Trailer/>
        <h1>{data.title}</h1>
        <div className="labels">
          <p>{year}</p>
          <p>{toHoursAndMinutes(data.runtime)}</p>
          <p>{data.tagline}</p>
        </div>
      </div>
    </div>
  )
 }
