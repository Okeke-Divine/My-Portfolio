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
      <div className="socialsLogoContainer">
        <div className="sdfsdfsd">
          <div class="horiLine">
            <div class="horiLineMain"></div>
          </div>
        </div>
        <div className="socialsLogo">
        <button
          className="socialLOGO"
          onClick={(e) => openLinkInNewTab("tel:+2347064878285")}
        >
          {" "}
          <i className="fa fa-phone"></i>
        </button>
        <button
          className="socialLOGO"
          onClick={(e) => openLinkInNewTab("https://wa.me/+2347064878285")}
        >
          {" "}
          <i className="fa fa-whatsapp"></i>
        </button>
        <button
          className="socialLOGO"
          onClick={(e) => openLinkInNewTab(socialMedia.mySocials.github)}
        >
          {" "}
          <i className="fa fa-github"></i>
        </button>
        <button
          className="socialLOGO"
          onClick={(e) => openLinkInNewTab(socialMedia.mySocials.twitter)}
        >
          {" "}
          <i className="fa fa-twitter"></i>
        </button>
        <button
          className="socialLOGO"
          onClick={(e) => openLinkInNewTab(socialMedia.mySocials.linkedin)}
          >
          {" "}
          <i className="fa fa-linkedin"></i>
        </button>
        <button
          className="socialLOGO"
          onClick={(e) => openLinkInNewTab(socialMedia.mySocials.facebook)}
          >
          {" "}
          <i className="fa fa-facebook"></i>
        </button>
        <button
          className="socialLOGO"
          onClick={(e) => openLinkInNewTab(socialMedia.mySocials.email_link)}
          >
          {" "}
          <i className="fa fa-envelope"></i>
        </button>
        </div>
        {/* devider 2 */}
       
        <div className="socialsLogo fodf">
        <button
          className="bufINis"
          onClick={(e) => openLinkInNewTab(socialMedia.mySocials.fiverr)}
        >
          {" "}
          Fiverr
        </button>
        <button
          className="bufINis"
          onClick={(e) => openLinkInNewTab(socialMedia.mySocials.upwork)}
        >
          {" "}
          Upwork
        </button>
        <button
          className="bufINis"
          onClick={(e) => openLinkInNewTab(socialMedia.mySocials.freelancer)}
        >
          {" "}
          Freelancer
        </button>
        <button
          className="bufINis"
          onClick={(e) => openLinkInNewTab(socialMedia.mySocials.truelancer)}
        >
          {" "}
          Truelancer
        </button>
        </div>
        <div className="sdfsdfsd">
          <div class="horiLine">
            <div class="horiLineMain"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
