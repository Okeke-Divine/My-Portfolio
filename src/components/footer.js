export default function Footer(props){
	const socialMedia = props.socialMedia
	
	return(
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
              Okeke Divine-Vessel{" "}
              <i className="fa fa-external-link fj93j9r"></i>
            </a>
          </section>
          )
}