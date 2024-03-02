import React from 'react'

const index = () => {
//    const videoUrl="https://video.milanofinanza.it/video/micam-milano-97-l-inaugurazione-del-salone-internazionale-della-calzatura-al45dS3hBr2J"
  return (
    <div className='w-full'>
        <iframe
        width="100%"
        height="800px"
        src={videoUrl}
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default index