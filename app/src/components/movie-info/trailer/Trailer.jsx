/**
 * Trailer component of the application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */
import React, { useState, useEffect } from 'react'
import Youtube from 'react-youtube'

const API_LOGO_URL = import.meta.env.VITE_LOGO_URL
const OFFICIAL = 'Official Trailer'
const TRAILER = 'Trailer'

 /**
  * Trailer component of application.
  * 
  * @return {HTML} - Render start page with public recipes.
  */
  export default function Trailer (props) {
    const videos = props.videos
    const [videoId, setVideoId] = useState(null)
    const logo = props.posterPath ? API_LOGO_URL + props.posterPath : ''

    useEffect(() => {
      let mounted = true
      const loadData = async () => {
        const trailer = videos.find(vid => vid.name === OFFICIAL) || videos.find(vid => vid.name === TRAILER)
        setVideoId(trailer ? trailer.key : null)
      }

      loadData()
      return () => {
        mounted = false
      }
    }, [])

    const videoOptions = {
      playerVars: {
        autoplay: 1
      }
    }

    if (videos && videoId) {
      return (
        <div className="trailer-container">
           <Youtube 
            className='trailer'
            videoId={videoId}
            opts={videoOptions}
           />
        </div>
      )
    } else if (logo) {
      const style = {
        background: `rgb(54, 51, 51) url(${logo}) no-repeat`,
        backgroundSize: '500px 700px'
      }
      return ( 
        <div className='no-trailer' style={style}>
            
        </div>
      )
    }
    
  }
   