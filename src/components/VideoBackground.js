import React from 'react'
import videoBg from '../bgimages/SPACIALVID.mp4'
import'./App.css'

const VideoBackground = () => {
  return (
    <div className='videoBg'>
      <video
        className="BgVideo"
        src={videoBg}
        autoPlay
        loop
        muted
      />
    </div>
  )
}

export default VideoBackground