/**
 * Side bar.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.1
 */

/**
 * Side component of application.
 * 
 * @return {HTML} - Render start page with public recipes.
 */
export default function Side () {
  return (
    <div className="side">
    <h1 className="nav_title">Movies</h1>

      <div className="nav">
        <a href="/" className="nav_element">
          <i className="fa fa-home"></i>
          <span className="nav_name">Home</span> 
        </a>
        <a href="/discover" className="nav_element">
          <i className="fa fa-compass"></i>
          <span className="nav_name">Discover</span> 
        </a>
      </div>
    </div>

  )
}
  