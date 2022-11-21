/**
 * Entry point of application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */

import './components/all.css'
import React, { lazy } from 'react'

const Home = lazy(() => import('./components/home/Home'))

export default function App() {
  return <Home/>
}
 