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
        <h3 className="big-heading ibuildt">I build things for the web.</h3>
      </div>
      <div className="breifIntro">
        Full Stack Developer with 7+ years of hands-on experience designing,
        developing, and implementing applications and solutions using a range of
        technologies and programming languages. Seeking to leverage broad
        development experience and hands-on technical expertise in a challenging
        role as a Full Stack Developer.
      </div>
      <div className="contactMe-1-cont">
        <button
          className="contactMe-1"
          onClick={(e) => openLinkInNewTab(socialMedia.mySocials.upwork)}
        >
          {" "}
          Hit Me Up On Upwork!
        </button>
      </div>
    </section>
  );
}
