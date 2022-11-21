/**
 * 404 error component.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */

import React from 'react'

/**
* 404 error component.
* 
* @returns {HTML} - Render 404 http error status - Not found.
*/
export default function Error404 () {
  return (
    <div className="error">
      <h2>404 Not Found</h2>
      <p>Sorry, but the page you were trying to view does not exist.</p>
    </div>
  )
}
 