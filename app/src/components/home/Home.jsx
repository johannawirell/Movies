/**
 * Home page of the application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.1
 */

import React, { lazy } from 'react'
const Side = lazy(() => import('./side/Side'))
const Browse = lazy(() => import('./browse/Browse'))

/**
* Home component of application.
* 
* @return {HTML} - Render start page with public recipes.
*/
export default function Home () {
  return (
    <div className="home-container">
      <Side/>
      <Browse/>
    </div>
  )
}
 