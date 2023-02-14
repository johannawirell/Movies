/**
 * Functions for handling API communication.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */

import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export async function discover () {
  return await axios.get(API_URL + '/discover/movie', {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  }).then(res => res)
    .catch(err => err)
}

export async function getGenres () {
  return await axios.get(API_URL + '/genre/movie/list', {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  }).then(res => res)
    .catch(err => err)
}

export async function getMoviesBasedOnGenre(genreId) {
  return await axios.get(API_URL + '/discover/movie', {
    params: {
      with_genres: genreId
    },
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  }).then(res => res)
    .catch(err => err)
}

export async function getMoviesSortedBy(sortType) {
  if (sortType === 'imdb') {
    sortType = 'vote_average.desc'
  } else if (sortType === 'release_date') {
    sortType = 'release_date.desc'
  } else if (sortType === 'popularity') {
    sortType = 'popularity.desc' 
  }
  return await axios.get(API_URL + '/discover/movie', {
    params: {
      'language': 'en-US',
      'sort_by': sortType,
      'page': 1
    },
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  }).then(res => res)
    .catch(err => err)
}
