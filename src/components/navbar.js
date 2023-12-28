export default function Navbar(props){
	return(
		<>
		<div className="navbar-cont">
          <div className="navbar-inner">
            <div className="navbarLogo">
              <img
                alt="My Logo"
                className="myLogo"
                src={props.dataBus.myLogo}
              />
            </div>
            <div className="navbarLinks">
              <ol>
                <li>
                  <a href="#me">
                    <span className="linkHighlight">00.</span> Intro
                  </a>
                </li>
                <li>
                  <a href="#about">
                    <span className="linkHighlight">01.</span> About
                  </a>
                </li>
                <li>
                  <a href="#experienceANDwork">
                    <span className="linkHighlight">02.</span> Experience / Work
                  </a>
                </li>
                <li>
                  <a href="#myProjects">
                    <span className="linkHighlight">03.</span> Projects
                  </a>
                </li>
                <li>
                  <a href="#contactMe">
                    <span className="linkHighlight">04.</span> Contact
                  </a>
                </li>
              </ol>
              <div>
                <a className="resume-button" href="/resume.pdf" target="_blank">
                  Resume
                </a>
              </div>
            </div>
            <div className="expandButton">
              <div><button><i className="fa fa-bars"></i></button></div>
            </div>
          </div>
        </div>
		</>)
}