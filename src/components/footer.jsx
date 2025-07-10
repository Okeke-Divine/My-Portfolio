export default function Footer({ socialMedia }) {
  const mySocials = socialMedia.mySocials;
  return (
    <>
      <section className="mainFooter">
        <div className="footerSocialsTitle text-center">Other Links</div>
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
      {/* <section className="footer jnUoFC">
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
      </section> */}
      <section className="text-center mt-2 mb-15">
        &copy; Okeke Divine-Vessel - 2025
      </section>
    </>
  );
}
