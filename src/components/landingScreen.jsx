import TypewriterEffect from "../utils/TypewriterEffect"

export default function LandingScreen(props) {
  const openLinkInNewTab = props.openLinkInNewTab;
  const socialMedia = props.socialMedia;

  return (
    <section className="landingScreen jnUoFC" id="me">
      <div className="hi">
        <h1>Hi, my name is</h1>
      </div>
      <div>
        <h2 className="big-heading">Divine-Vessel O.</h2>
      </div>
      <div>
        <h3 className="big-heading ibuildt">
          <TypewriterEffect text="I build pixel-perfect, engaging, and accessible digital experiences." speed={50} pauseFor={5000} />
        </h3>
      </div>
      <div className="breifIntro">
        Results-oriented Full Stack Software Engineer with over 5+ years of hands on experience
        building user-friendly and scalable web applications. Successfully
        designed, developed, and deployed over 18 applications using
        technologies like [React, NextJs, Django, PHP, MySQL, PostgreSQL and so on]
      </div>
      <div className="contactMe-1-cont">
        <button
          className="contactMe-1 contactMe-2"
          onClick={(e) =>
            openLinkInNewTab(
              "/Resume - Full Stack Software Engineer - Okeke Divine-Vessel.pdf"
            )
          }
        >
          Resume
        </button>
        <button
          className="contactMe-1"
          onClick={(e) => openLinkInNewTab(socialMedia.mySocials.github)}
        >
          <i className="fa fa-github mr-2"></i>
          Github
        </button>
      </div>
    </section>
  );
}
