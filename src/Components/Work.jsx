import coolerImg from "../assets/nportfolio.webp";
import musicImg from "../assets/nnportfolio.webp";

function Work() {
  return (
    <>
      <section className="work-header">
        <p className="work-title hidden show" id="work-header">
          work
        </p>
        <h2 className="hidden show">Selected Projects</h2>
        <p className="hidden show">A quick view of my recent works</p>
      </section>

      <section
        className="portfolio"
        style={{ paddingTop: "2em", paddingBottom: "8em" }}
      >
        <a href="https://music-player-mocha-alpha.vercel.app/" target="_blank">
          <h3
            style={{
              fontWeight: "200",
              textAlign: "right",
            }}
          >
            Fullstack React Music Player
          </h3>
          <img src={musicImg} alt="Music Portfolio Design" />
        </a>
      </section>

      <section className="portfolio" style={{ marginTop: "-4em" }}>
        <a
          href="https://www.behance.net/gallery/213017585/Graphic-design-soda-cooler-project"
          target="_blank"
        >
          <h3
            style={{
              marginBottom: "-10px",
              fontWeight: "200",
            }}
          >
            Soda Cooler Wrapper Design
          </h3>
          <img src={coolerImg} alt="Soda Cooler Project Design" />
        </a>
      </section>
    </>
  );
}

export { Work };
