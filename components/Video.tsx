import React from 'react'
interface videoProps{
    videoUrl: string,
    videoTitle: string
}
export default function Video({videoUrl, videoTitle}:videoProps) {
  return (
    <iframe
    className="w-full h-[200px] sm:h-[315px] rounded-lg shadow-lg border border-gray-200"
    src={`https://www.youtube-nocookie.com/embed/${videoUrl}?rel=0`}
    title={`Video sobre ${videoTitle}`}
    frameBorder="0"
    loading="lazy"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
  )
}
