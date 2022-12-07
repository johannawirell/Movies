/**
 * Component that shows the most popular movies.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.1
 */
import React, { lazy } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Movie = lazy(() => import('../movie/Movie'))

/**
 * Browse component of application.
 * 
 * @return {HTML} - Render start page with public recipes.
 */
export default function Popular (props) {
  const slideLeft = () => {
    const slider = document.querySelector('#popular')
    slider.scrollLeft = slider.scrollLeft - 500
  }

  const slideRight = () => {
    const slider = document.querySelector('#popular')
    slider.scrollLeft = slider.scrollLeft + 500
  }

  if (props.movies) {
    return (
      <div className="trending-container">
        <h1 className="title">Trending</h1>

        <div className="scroll-container">
          <MdChevronLeft className="arrow" onClick={slideLeft} />
          <div className="trending scroll" id="popular">
            {props.movies.map(movie => (
              <Movie 
                title={movie.original_title} 
                posterPath={movie.poster_path}
                id={movie.id} 
                className='trending-item'
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
  