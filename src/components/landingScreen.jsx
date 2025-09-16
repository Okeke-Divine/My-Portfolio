// import TypewriterEffect from "../utils/TypewriterEffect"

export default function LandingScreen(props) {
  const openLinkInNewTab = props.openLinkInNewTab;
  const socialMedia = props.socialMedia;
  const mySocials = socialMedia.mySocials;

  return (
    <section className="landingScreen jnUoFC" id="me">
      <div className="hi">
        <h1>Hi, I'm</h1>
      </div>
      <div>
        <h2 className="big-heading">Divine-Vessel O.</h2>
      </div>
      <div>
        <h3 className="big-heading ibuildt">
          {/* <TypewriterEffect text="I build pixel-perfect, engaging, and accessible digital experiences." speed={50} pauseFor={5000} /> */}
          Full Stack Software Engineer
        </h3>
      </div>
      <div className="breifIntro">
        I'm a full-stack engineer with over 3 years of experience. I build real-world applications and robust server-side systems using TypeScript, JavaScript, Python, and PHP.
      </div>
      <div className="contactMe-1-cont">
        <button
          className="contactMe-1 contactMe-2 btn-hover-1 transition-300"
          onClick={(e) =>
            openLinkInNewTab(
              mySocials["linkedin"]
            )
          }
        >
          Let's talk
        </button>
        {/* <a
          className="contactMe-1 btn-hover-2"
          href="#myProjects"
        >
          View My Work →
        </a> */}
        <a
          className="contactMe-1 link-1 myResume"
          href="/Resume - Full Stack Software Engineer - Okeke Divine-Vessel.pdf"
          target="_blank"
        >
          My Resume
        </a>
      </div>
    </section>
  );
}
