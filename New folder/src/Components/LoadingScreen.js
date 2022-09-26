import React from 'react'
import './LoadingScreen.css'
function LoadingScreen() {
  return (
    <div className='LoadingScreen'>
      <div className="loadingLogo">
        <div className="loadingNetflix">
            <span></span>
            <span></span>
            <span></span>
        </div>
        <h3>Netflix</h3>
        <p>
         Tip: Trailers & other related videos are available to play. Click on the movie poster, if videos are available it will apper in "Details" Section.
        </p>
      </div>
    </div>
  )
}

export default LoadingScreen