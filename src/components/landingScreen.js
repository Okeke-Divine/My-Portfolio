export default function LandingScreen(props){
	const openLinkInNewTab = props.openLinkInNewTab
	const socialMedia = props.socialMedia

	return(
		 <section className="landingScreen jnUoFC" id="me">
            <div className="hi">
              <h1>Hi, my name is</h1>
            </div>
            <div>
              <h2 className="big-heading">Okeke Divine-Vessel.</h2>
            </div>
            <div>
              <h3 className="big-heading ibuildt">
                I build things for the web.
              </h3>
            </div>
            <div className="breifIntro">
              I'm a seasoned software engineer passionate about crafting
              exceptional digital experiences. With a keen focus on creating
              accessible and human-centered products, my expertise lies in
              building robust web applications. Currently dedicated to enhancing
              user experiences at Mtalers, I strive to blend innovation and
              user-centric design for impactful solutions.
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
          )
}