/**
 * Entry point of application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.1
 */

import './components/all.css'
import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./components/home/Home'))
const MovieInfo = lazy(() => import('./components/movie-info/MovieInfo'))
const Error404 = lazy(() => import('./components/error/Error404'))

export default function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieInfo />} />
        <Route path="*" element = {<Error404 />}/>
      </Routes>
    </div>
  )
}
 