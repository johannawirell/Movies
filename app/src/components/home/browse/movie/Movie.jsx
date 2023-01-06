/**
 * The movie component.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */
const API_LOGO_URL = import.meta.env.VITE_LOGO_URL

/**
 * Movie component of application.
 * 
 * @return {HTML} - Render start page with public recipes.
 */
 export default function Movie (props) {
  const classes = `${props.className} movie`
  const logo = API_LOGO_URL + props.posterPath

  const setImage = () => {
    const element = document.getElementById(props.id)
    if (element) {
      element.style.backgroundImage=`url(${logo})`
    }
  }

  setTimeout(() => {
    setImage()
  }, )

 return (
    <a href={`./movie/${props.id}`}>
      <div className={classes} id={props.id}></div>
    </a>
  ) 
}
