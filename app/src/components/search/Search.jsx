/**
 * Search component of the application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.2
 */

import React, { useState } from 'react'
import { MdSearch } from 'react-icons/md'

/**
* Search component of application.
* 
* @return {HTML} - Render a search component.
*/
export default function Search () {
  const [query, setQuery] = useState(null)

  const searchMovies = async event => {
    event.preventDefault()
    if (query.length > 1) {
      window.location = `/search?query=${query}` 
    }
  } 

  return (
    <div className = "search">
      <form className="search-box" onSubmit={searchMovies}>
          <input type="text" id="search" onChange={event => setQuery(event.target.value)}/>
          <MdSearch className="search-icon"  onClick={e => searchMovies(e)}/>
        </form>
    </div>
  )
}
