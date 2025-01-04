import React, { useRef, useState } from "react";
import logo from "../../assets/images/flogo.png";
import textlogo from "../../assets/images/textLogo.png";
import { FaPlayCircle } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import video from "../../assets/video/showcase.webm";
import stage from "../../assets/video/black.webm";
import VideoPlayer from "react-background-video-player";

export default function Video() {
  const [isOpen, setOpen] = useState(false);
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    const video = videoRef.current;

    if (video.paused) {
      video.play();
      setOpen(!isOpen);
    } else {
      video.pause();
      setOpen(!isOpen);
    }
  };
  return (
    <>
      <section className="bg-black py-10">
        <div className="relative z-10">
          <video
            src={stage}
            ref={videoRef}
            id="myVideo"
            controls
            muted
            onClick={handleVideoClick}
            className="w-full h-full"
          ></video>
          {!isOpen && (
            <span
              className="absolute top-[50%] translate-y-[-50%] translate-x-[-50%] md:top-1/2 lg:top-1/2 xl:top-1/2 2xl:top-1/2 left-[50%] lg:left-1/2 xl:left-1/2 2xl:left-1/2 md:left-1/2 cursor-pointer"
              onClick={handleVideoClick}
            >
              <FaPlayCircle className="text-white text-6xl" />
            </span>
          )}
        </div>
      </section>
    </>
  );
}
