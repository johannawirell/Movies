/**
 * Functions for handling API communication.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */

import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY
const LOGO_URL = process.env.REACT_APP_LOGO_URL

export async function getPopularMovies() {
  console.log('get movies')
  console.log(API_KEY)
  console.log(LOGO_URL)
}

