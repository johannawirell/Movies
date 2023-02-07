/**
 * Disover page of the application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */

import React, { lazy, useState, useEffect } from 'react'
import { getMovies } from '../../lib/CommunicationAPI'

const Side = lazy(() => import('../home/side/Side'))
const Search = lazy(() => import('../search/Search'))
const Error500 = lazy(() => import('../error/Error500'))

/**
* Discover component of application.
* 
* @return {HTML} - Render the discover page.
*/
export default function Discover () {
 
  return (
    <div className="home-container">
      <Search/>
      <Side/>

    </div>
  )
}
