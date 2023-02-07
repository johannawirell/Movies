/**
 * Entry point of application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */

import React, { lazy } from 'react'
import {
  BrowserRouter as Router,
  useRoutes,
} from 'react-router-dom'

const Home = lazy(() => import('./components/home/Home'))
const Discover = lazy(() => import('./components/discover/Discover'))
const MovieInfo = lazy(() => import('./components/movie-info/MovieInfo'))
const SearchResult = lazy(() => import('./components/search/result/SearchResult'))
const Error404 = lazy(() => import('./components/error/Error404'))

export default function App() {
  const routes = useRoutes([
    { path: '/', element: <Home/> },
    { path: '/movie/:id', element: <MovieInfo/> },
    { path: '/search', element: <SearchResult/> },
    { path: '/discover', element: <Discover/> },
    { path: '*', element: <Error404/> }
  ])
  return routes
}
 