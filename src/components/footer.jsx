export default function Footer({ socialMedia }) {
  const mySocials = socialMedia.mySocials;
  return (
    <>
      <section className="footer jnUoFC">
        Designed by{" "}
        <a
          href={socialMedia.originalCreatorBchiang}
          target="_blank"
          className="designNdInspiredByLink"
        >
          Brittany Chiang <i className="fa fa-external-link fj93j9r"></i>
        </a>{" "}
        & Rebuilt by{" "}
        <a
          href={socialMedia.mySocials.github}
          target="_blank"
          className="designNdInspiredByLink"
        >
          Okeke Divine-Vessel <i className="fa fa-external-link fj93j9r"></i>
        </a>
      </section>
      <section className="mainFooter">
        <div className="flex flex-wrap footerLinkList">
          {Object.entries(mySocials).map(
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
          )}
        </div>
      </section>
    </>
  );
}
