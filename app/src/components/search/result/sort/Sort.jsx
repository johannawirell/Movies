/**
 * Sort component of the application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */

import React, { useState } from 'react'

/**
* Sort component of application.
* 
* @return {HTML} - Render a sort component.
*/
export default function Sort () {

  return (
    <div className="sort-container">
        <div className="sort-label">Sort by:</div>
        <select>
            <option value="relevans">relevans</option>
            <option value="imdb">IMDB</option>
        </select>
    </div>
  )
}
