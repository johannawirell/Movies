/**
 * Trailer component of the application.
 *
 * @author Johanna Wirell
 * @version 1.1.0
 */
import React, { useState, useEffect } from 'react'
import Youtube from 'react-youtube'

const API_LOGO_URL = import.meta.env.VITE_LOGO_URL
const OFFICIAL = 'Official Trailer'
const TRAILER = 'Trailer'

export default function Trailer ({ videos, posterPath }) {
  const [videoId, setVideoId] = useState(null)
  const [showTrailer, setShowTrailer] = useState(false)
  const logo = posterPath ? API_LOGO_URL + posterPath : ''

  useEffect(() => {
    const trailer =
      videos?.find(vid => vid.name === OFFICIAL) ||
      videos?.find(vid => vid.name.includes(TRAILER))
    setVideoId(trailer ? trailer.key : null)
  }, [videos])

  const videoOptions = {
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      rel: 0
    }
  }

  // --- Visar trailern i overlay ---
  if (showTrailer && videoId) {
    return (
      <div className="trailer-overlay">
        <button
          className="close-trailer"
          onClick={() => setShowTrailer(false)}
        >
          ✕ Stäng
        </button>
        <Youtube
          className="trailer"
          videoId={videoId}
          opts={videoOptions}
        />
      </div>
    )
  }

  // --- Visar filmaffischen med knapp ---
  if (logo) {
    const style = {
      background: `rgb(54, 51, 51) url(${logo}) center/cover no-repeat`
    }
    return (
      <div className="no-trailer" style={style}>
        {videoId ? (
          <button
            className="play-trailer-btn"
            onClick={() => setShowTrailer(true)}
          >
            ▶ Spela trailer
          </button>
        ) : (
          <p className="no-trailer-text">Ingen trailer tillgänglig</p>
        )}
      </div>
    )
  }

  // --- Om inget finns alls ---
  return (
    <div className="empty-trailer">
      <p>No trailer to show.</p>
    </div>
  )
}
