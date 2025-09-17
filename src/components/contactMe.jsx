export default function ContactMe(props) {
  const socialMedia = props.socialMedia;
  const openLinkInNewTab = props.openLinkInNewTab;

  const mySocials = socialMedia.mySocials;

  return (
    <section className="contactMe jnUoFC" id="contactMe">
      <div className="contactMeTinyTitle">
        <div>{props.count}</div>
        <div>What’s Next?</div>
      </div>
      <div>
        <h2 className="big-heading getInTouch">Let's talk</h2>
      </div>
      <div className="contactMeInfo-container">
        <div className="contactMeInfo">
          I'm open to freelance projects and part-time engineering roles.
        </div>
      </div>
      <div className="sayHello">
        <button
          className="sayHelloButton"
          onClick={(e) => openLinkInNewTab(mySocials["linkedin"])}
        >
          Let's talk
        </button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}
