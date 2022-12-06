/**
 * Component that shows the top rated movies.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */

import React, { lazy } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
const Movie = lazy(() => import('../movie/Movie'))

/**
 * Top rated movies component of application.
 * 
 * @return {HTML} - Render start page with public recipes.
 */
 export default function Popular (props) {
  const slideLeft = () => {
    const slider = document.querySelector('#top')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    const slider = document.querySelector('#top')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  if (props.movies) {

    return (
      <div className="top-rated-container">
      <h1 className="title">Top rated</h1>

      <div className="scroll-container">
        <MdChevronLeft className="arrow" onClick={slideLeft} />
          <div className="top-rated scroll" id="top">
            {props.movies.map(movie => (
              <Movie 
                title={movie.original_title} 
                posterPath={movie.poster_path} 
                id={movie.id} 
                className='top-rated-item'
                key={movie.id}
                />
            ))}
          </div>
          <MdChevronRight className="arrow" onClick={slideRight} />
        </div>
      </div>
    )
  }
}
  