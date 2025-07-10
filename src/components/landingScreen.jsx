import TypewriterEffect from "../utils/TypewriterEffect"

export default function LandingScreen(props) {
  const openLinkInNewTab = props.openLinkInNewTab;
  const socialMedia = props.socialMedia;
  const mySocials = socialMedia.mySocials;

  return (
    <section className="landingScreen jnUoFC" id="me">
      <div className="hi">
        <h1>Hi, i'm</h1>
      </div>
      <div>
        <h2 className="big-heading">Divine</h2>
      </div>
      <div>
        <h3 className="big-heading ibuildt">
          <TypewriterEffect text="I build pixel-perfect, engaging, and accessible digital experiences." speed={50} pauseFor={5000} />
        </h3>
      </div>
      <div className="breifIntro">
        I craft digital experiences that users love, from pixel-perfect UIs to scalable backends. My superpower? Turning complex problems into simple, joyful solutions
      </div>
      <div className="contactMe-1-cont">
        <button
          className="contactMe-1 contactMe-2"
          onClick={(e) =>
            openLinkInNewTab(
              mySocials["whatsapp"]
            )
          }
        >
          Contact Me
        </button>
        <a
          className="contactMe-1"
          href="#myProjects"
          // onClick={(e) =>
          //   openLinkInNewTab(
          //     "/Resume - Full Stack Software Engineer - Okeke Divine-Vessel.pdf"
          //   )
          // }
        >
          See my work
        </a>
        {/* <button
          className="contactMe-1"
          onClick={(e) => openLinkInNewTab(socialMedia.mySocials.github)}
        >
          <i className="fa fa-github mr-2"></i>
          Github
        </button> */}
      </div>
    </section>
  );
}
