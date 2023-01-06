/**
 * Component that movies based on search query.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */
import React, { lazy } from 'react'
import { useLocation } from 'react-router-dom'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Movie = lazy(() => import('../movie/Movie'))

/**
 * Browse component of application.
 * 
 * @return {HTML} - Render start page with public recipes.
 */
export default function SearchResult (props) {
    const location = useLocation()
    console.log(location.state)
    return 'search result'
//   const slideLeft = () => {
//     const slider = document.querySelector('#popular')
//     slider.scrollLeft = slider.scrollLeft - 500
//   }

//   const slideRight = () => {
//     const slider = document.querySelector('#popular')
//     slider.scrollLeft = slider.scrollLeft + 500
//   }

//   if (props.movies) {
//     return (
//       <div className="trending-container">
//         <h1 className="title">Trending</h1>
//         <div className="scroll-container">
//           <MdChevronLeft className="arrow" onClick={slideLeft} />
//           <div className="trending scroll" id="popular">
//             {props.movies.map(movie => (
//               <Movie 
//                 title={movie.original_title} 
//                 posterPath={movie.poster_path}
//                 id={movie.id} 
//                 className='trending-item'
//                 key={movie.id}
//                 />
//             ))}
//           </div>
//           <MdChevronRight className="arrow" onClick={slideRight} />
//         </div>
//       </div>
//     )
//   }
}
  