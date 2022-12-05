/**
 * Component that shows the most popular movies.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */

/**
 * Browse component of application.
 * 
 * @return {HTML} - Render start page with public recipes.
 */
export default function Popular () {
  return (
    <>
      <h1 className="title">Trending</h1>
      <div className="trending">
        <div className="trending_item"></div>
        <div className="trending_item"></div>
      </div>
    </>
  )
}
  