import { useRef, useEffect } from "react";

function About() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <section className="about-section" id="about-section">
      <div className="about-text">
        <h1 className="hidden show">Julia</h1>
        <p className="hidden show">Digital Design. Frontend</p>
        <div className="video-div">
          <video ref={videoRef} autoPlay muted loop playsInline>
            <source
              src="https://res.cloudinary.com/ddiydfgbq/video/upload/v1775389041/typo-video_ncb11l.mov"
              type="video/mp4"
            />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
    </section>
  );
}

export { About };
