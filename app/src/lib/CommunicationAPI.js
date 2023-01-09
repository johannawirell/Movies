/**
 * Functions for handling API communication.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.1
 */

import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL
const API_KEY = import.meta.env.VITE_API_KEY

export async function getMovieInfo(movieId) {
  return await axios.get(API_URL + `/movie/${movieId}`, {
    params: {
      'language': 'en-US',
      'append_to_response': 'videos'
    },
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  }).then(res => res)
    .catch(err => err)
}

export async function getMovies() {
  const popular = await getPopularMovies()
  const top = await getTopRatedMovies()

  if (popular.status === 200 && top.status === 200) {
    return {
      popularMovies: popular.data,
      topMovies: top.data
    }
  } else {
    const response = {
      error: true
    }

    if (popular.status !== 200) {
      response.popularMovies = popular.response
    }

    if (top.status !== 200) {
      response.topMovies = top.response
    }

    return response
  }
}

async function getPopularMovies() {
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

async function getTopRatedMovies() {
  return await axios.get(API_URL + '/movie/top_rated', {
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


