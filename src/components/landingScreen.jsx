// import Typewriter from 'react-typewriter-effect';

export default function LandingScreen(props) {
  const openLinkInNewTab = props.openLinkInNewTab;
  const socialMedia = props.socialMedia;

  return (
    <section className="landingScreen jnUoFC" id="me">
      <div className="hi">
        <h1>Hi, my name is</h1>
      </div>
      <div>
        <h2 className="big-heading">Okeke Divine-Vessel.</h2>
      </div>
      <div>
        <h3 className="big-heading ibuildt">
          I build pixel-perfect, engaging, and accessible digital experiences.
          {/* <Typewriter
      onInit={(typewriter) => {
        typewriter.typeString("I build pixel-perfect, engaging, and accessible digital experiences.")
          .start();
      }}
    /> */}
        </h3>
      </div>
      <div className="breifIntro">
        Results-oriented Full Stack Web Developer with 7+ years of experience
        building user-friendly and scalable web applications. Successfully
        designed, developed, and deployed over 18 web applications using
        technologies like [React, NextJs, Django, PHP, MySQL, PostgreSQL]
      </div>
      <div className="contactMe-1-cont">
      <button
          className="contactMe-1 contactMe-2"
          onClick={(e) =>
            openLinkInNewTab(
              "/Okeke Divine-Vessel - Full Stack Web Dev - Resume.pdf"
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
