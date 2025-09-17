export default function Footer({ socialMedia,openLinkInNewTab }) {
  const mySocials = socialMedia.mySocials;
  return (
    <>
      <section className="mainFooter">
        <div className="flex flex-wrap footerLinkList mb-2">
          <div
            className="icons"
            onClick={(e) => openLinkInNewTab(socialMedia.mySocials.linkedin)}
          >
            <a className="">
              <i className="ri-linkedin-line remix-icon"></i>
            </a>
          </div>
          <div
            className="icons"
            onClick={(e) => openLinkInNewTab(socialMedia.mySocials.github)}
          >
            <a className="#">
              <i className="ri-github-line remix-icon"></i>
            </a>
          </div>
          <div
            className="icons"
            onClick={(e) => openLinkInNewTab(socialMedia.mySocials.twitter)}
          >
            <a className="">
              <i className="ri-twitter-line remix-icon"></i>
            </a>
          </div>
        </div>
      </section>
      <section className="footer mb-2 jnUoFC">
        Design inspired by{" "}
        <a
          href={socialMedia.originalCreatorBchiang}
          target="_blank"
          rel="noopener noreferrer"
          className="designNdInspiredByLink"
        >
          Brittany Chiang
        </a>
        . Reimagined and implemented by yours truly!
      </section>
      <section className="text-center mt-2 mb-15">
        &copy; Divine‑Vessel O. - 2025
      </section>
    </>
  );
}