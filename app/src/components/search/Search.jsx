/**
 * Search component of the application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.2
 */

import React, { lazy, useState } from 'react'
import { searchMovie } from '../../lib/CommunicationAPI.js'
import { MdSearch } from 'react-icons/md'

const Loading = lazy(() => import('../loading/Loading'))
const Error500 = lazy(() => import('../error/Error500'))
/**
* Search component of application.
* 
* @return {HTML} - Render a search component.
*/
export default function Search () {
  const [loading, setLoading] = useState(null)
  const [serverError, setServerError] = useState(null)
  const [query, setQuery] = useState(null)
  const [result, setResult] = useState(null)

  const submit = async () => {
    if (query) {
      let mounted = true
      setLoading(true)
      const response = await searchMovie(query)

      if (mounted) {
        console.log(response)
        if (response.status !== 200) {
          setServerError(true)
          console.error(response)
        } else {
          setLoading(false)
          setResult(response.results)
        }
      }
    }
    return () => {
      mounted = false
    }
  }

  if (!serverError) {
    return <Error500 />
  } else if (loading) {
    return <Loading />
  } else if (result) {
    // redirect
  }

  return (
    <div className = "search">
      <div className="search-box">
          <input 
            type="text" id="search"
            onChange={event => setQuery(event.target.value)}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                submit()
              }
            }}
          />
          <MdSearch className="search-icon"  onClick={() => submit()}/>
        </div>
    </div>
  )
}
