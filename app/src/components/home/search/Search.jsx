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
  return (
    <div className = "search">
      <div className="search-box">
          <input type="text" id="search"></input>
          <MdSearch className="search-icon" />
        </div>
    </div>
  )
}
