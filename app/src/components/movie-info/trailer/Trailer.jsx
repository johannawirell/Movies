/**
 * Trailer component of the application.
 *
 * @author Johanna Wirell <wirelljohanna@gmail.com>
 * @version 1.0.0
 */
import React, { useState, useEffect } from 'react'
import Youtube from 'react-youtube'
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

    useEffect(() => {
      let mounted = true
      const loadData = async () => {
        const trailer = videos.find(vid => vid.name === OFFICIAL) || videos.find(vid => vid.name === TRAILER)
        setVideoId(trailer.key)
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

    if (videos) {
      return (
        <div className="trailer-container">
           <Youtube 
            className='trailer'
            videoId={videoId}
            opts={videoOptions}
           />
        </div>
      )
    }
    
  }
   