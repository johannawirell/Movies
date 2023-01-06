/**
 * Search component of the application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.2
 */

import React, { lazy, useState, useEffect } from 'react'
import { MdSearch } from 'react-icons/md'

/**
* Search component of application.
* 
* @return {HTML} - Render a search component.
*/
export default function Search () {
  const [query, setQuery] = useState(null)

  const submit = () => {
    if (query) {
      console.log(query)
    }
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
