/**
 * Component that shows the top rated movies.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */

/**
 * Top rated movies component of application.
 * 
 * @return {HTML} - Render start page with public recipes.
 */
 export default function Popular () {
  // Fetch popular
  return (
    <>
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
    </>
  )
}
  