export default function ContactMe(props){
	const socialMedia = props.socialMedia
	const openLinkInNewTab = props.openLinkInNewTab
	
	return(
		<section className="contactMe jnUoFC" id="contactMe">
            <div className="contactMeTinyTitle">
              <div>04.</div>
              <div>What’s Next?</div>
            </div>
            <div>
              <h2 className="big-heading getInTouch">Get in Touch</h2>
            </div>
            <div className="contactMeInfo">
              I am actively seeking job opportunities and open to exciting
              offers in the field. Ready to contribute and eager to explore new
              roles and challenges.
            </div>
            <div className="sayHello">
              <button
                className="sayHelloButton"
                onClick={(e) =>
                  openLinkInNewTab("mailto:" + socialMedia.mySocials.github)
                }
              >
                Say Hello (Email)
              </button>
            </div>
          </section>
          )
}