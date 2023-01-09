/**
 * Functions for handling API communication.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.1
 */

import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export async function searchMovie (query) {
  return await axios.get(API_URL + '/search/movie', {
    params: {
      'query': query,
      'language': 'en-US',
      'page': 1
    },
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  }).then(res => res)
    .catch(err => err)
}