export default function Footer({ socialMedia,openLinkInNewTab }) {
  const mySocials = socialMedia.mySocials;
  return (
    <>
      <section className="mainFooter">
        {/* <div className="footerSocialsTitle text-center">Other Links</div> */}
        <div className="flex flex-wrap footerLinkList mb-2">
          {/* {Object.entries(mySocials).map(
            ([socialMediaName, link], index) =>
              socialMediaName !== "email" &&
              socialMediaName !== "email_link" && (
                <div key={index}>
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {socialMediaName.charAt(0).toUpperCase() +
                      socialMediaName.slice(1)}
                  </a>
                </div>
              )
          )} */}

          <div
            className="icons"
            onClick={(e) => openLinkInNewTab(socialMedia.mySocials.linkedin)}
          >
            <a className="">
              <i className="fa fa-linkedin"></i>
            </a>
          </div>
          <div
            className="icons"
            onClick={(e) => openLinkInNewTab(socialMedia.mySocials.github)}
          >
            <a className="#">
              <i className="fa fa-github"></i>
            </a>
          </div>

          <div
            className="icons"
            onClick={(e) => openLinkInNewTab(socialMedia.mySocials.twitter)}
          >
            <a className="">
              <i className="fa fa-twitter"></i>
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
        {/* <a
          href={socialMedia.mySocials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="designNdInspiredByLink"
        >
          Divine‑Vessel O.
        </a> */}
      </section>
      <section className="text-center mt-2 mb-15">
        &copy; Divine‑Vessel O. - 2025
      </section>
    </>
  );
}
