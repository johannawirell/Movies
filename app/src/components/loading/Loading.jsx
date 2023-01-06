/**
 * Loading component.
 *
 * @author Johanna Wirell <jw223gx@student.lnu.se>
 * @version 1.0.0
 */
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.css'
 
/**
 * Loading component.
 * 
 * @returns {HTML} - Render a loading symbol.
 */
export default function Loading () {
    return (
        <div className="loading">
            <Spinner animation="grow" variant="danger">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </div>
    )
  }
   