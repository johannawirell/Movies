/**
 * Component that sorts movies.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */
import React, { lazy, useState, useEffect } from 'react'
const Loading = lazy(() => import('../loading/Loading'))
const Error500 = lazy(() => import('../error/Error500'))
const Side = lazy(() => import('../home/side/Side'))
const Search = lazy(() => import('../search/Search'))

/**
 * Sort component of application.
 * 
 * @return {HTML} - Render start page with public recipes.
 */
export default function Sort (props) {
    const [loading, setLoading] = useState(false)
    const [serverError, setServerError] = useState(null)

    console.log('sort')
    if (serverError) {
        return <Error500 />
      } else if (loading) {
        return <Loading />
      }

    return (
    <div className="home-container">
        <Search/>
        <Side/>
      </div>
    
    )
}
  