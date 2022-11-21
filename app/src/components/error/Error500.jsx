/**
 * 500 error component.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */
 
/**
 * 500 error component.
 * 
 * @returns {HTML} - Render 500 http error status - Internal Server Error.
 */
 export default function Error500 () {
  return (
    <div className="error">
      <h2>500 Internal Server Error</h2>
      <p>There is a problem with the resource you are looking for, and it cannot be displayed.</p>
    </div>
  )
}
 