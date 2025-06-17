import { PlayIcon } from '@heroicons/react/24/solid'
import React, { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [loading, setLoading] = useState(true)
  const [inViewRef, inView] = useInView({
    triggerOnce: true, // Only trigger once
    threshold: 0.1 // At least 10% of the video should be visible
  })

  useEffect(() => {
    if (inView) {
      // Start loading the video when it comes into view
      setLoading(false)
    }
  }, [inView])

  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play()
      setPlaying(true)
    } else {
      videoRef.current.pause()
      setPlaying(false)
    }
  }

  return (
    <div className='relative flex items-center justify-center' ref={inViewRef}>
      {!loading && (
        <video
          ref={videoRef}
          className='w-full'
          controls={false}
          aria-label='Video player'
          onClick={handlePlayPause}
        >
          <source src={videoUrl} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      )}
      {!playing && (
        <button
          className='focus:ring-blue-500 absolute rounded-full bg-white bg-opacity-80 p-4 hover:bg-opacity-60 focus:outline-none focus:ring-2 focus:ring-offset-2'
          onClick={handlePlayPause}
          aria-label='Play video'
        >
          <PlayIcon className='h-10 w-10 text-teal-600' />
        </button>
      )}
    </div>
  )
}

export default VideoPlayer
