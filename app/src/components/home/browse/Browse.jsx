/**
 * Component that shows the movies.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */

/**
 * Browse component of application.
 * 
 * @return {HTML} - Render start page with public recipes.
 */
export default function Browse () {
  return (
    <div className="list-movies">
      <h1 className="title">Trending</h1>
      <div className="trending">
        <div className="trending_item"></div>
        <div className="trending_item"></div>
      </div>
      <h1 className="title">Top rated</h1>
      <div className="top_rated">
        <div className="top_rated_item"></div>
        <div className="top_rated_item"></div>
        <div className="top_rated_item"></div>
        <div className="top_rated_item"></div>
        <div className="top_rated_item"></div>
        <div className="top_rated_item"></div>
        <div className="top_rated_item"></div>
        <div className="top_rated_item"></div>
      </div>

    </div>
  )
}
  