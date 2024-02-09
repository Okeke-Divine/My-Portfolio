import { useRef } from "react";

export default function Navbar(props) {
  const navbarLinks = useRef();
  const expandButtonIcon = useRef();

  function open_navbarLinks() {
    if (navbarLinks.current.getAttribute("isopened") == "false") {
      navbarLinks.current.style.display = "block";
      expandButtonIcon.current.setAttribute("class", "fa fa-times");
      navbarLinks.current.setAttribute("isopened", "true");
    } else {
      navbarLinks.current.style.display = "none";
      expandButtonIcon.current.setAttribute("class", "fa fa-bars");
      navbarLinks.current.setAttribute("isopened", "false");
    }
  }

  return (
    <>
      <div className="navbar-cont">
        <div className="navbar-inner">
          <div className="navbarLogo">
            <img alt="My Logo" className="myLogo" src={props.dataBus.myLogo} />
          </div>
          <div className="navbarLinks" ref={navbarLinks} isopened="false">
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
              {/* <li>
                  <a href="#experienceANDwork">
                    <span className="linkHighlight">02.</span> Experience / Work
                  </a>
                </li> */}
              <li>
                <a href="#myProjects">
                  <span className="linkHighlight">02.</span> Projects
                </a>
              </li>
                <li>
                  <a href="#gigs">
                    <span className="linkHighlight">03.</span> Gigs
                  </a>
                </li>
                <li>
                  <a href="#contactMe">
                    <span className="linkHighlight">04.</span> Contact
                  </a>
                </li>
            </ol>
            <div>
              <a
                className="resume-button"
                href="Okeke_Divine_Resume.pdf"
                target="_blank"
              >
                Resume
              </a>
            </div>
          </div>
          <div className="expandButton">
            <div onClick={(e) => open_navbarLinks()}>
              <button>
                <i ref={expandButtonIcon} className="fa fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
