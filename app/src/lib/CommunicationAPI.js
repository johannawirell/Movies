/**
 * Functions for handling API communication.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */

import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL
const API_KEY = process.env.REACT_APP_API_KEY
// const LOGO_URL = process.env.REACT_APP_LOGO_URL

export async function getPopularMovies() {
  return await axios.get(API_URL + '/movie/popular', {
    params: {
      'language': 'en-US',
      'page': 1
    },
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  }).then(res => res)
    .catch(err => err)
}

