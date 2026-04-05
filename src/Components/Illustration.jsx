import bird8 from "../assets/birdimg8.png";
import bird7 from "../assets/birdimg7.png";
import bird6 from "../assets/birdimg6.png";
import bird5 from "../assets/birdimg5.png";
import { useEffect, useState } from "react";

const slides = [bird8, bird7, bird6, bird5, bird6, bird7];

function Illustration() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 1000);

    return () => clearTimeout(timer);
  }, [slideIndex]);

  return (
    <div className="bird-image hidden show">
      {slides.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`Bird ${i + 1}`}
          style={{ display: i === slideIndex ? "block" : "none" }}
        />
      ))}
    </div>
  );
}

export { Illustration };
