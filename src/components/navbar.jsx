import { useRef, useState, useEffect } from "react";

export default function Navbar(props) {
  const navbarLinks = useRef();
  const expandButtonIcon = useRef();

  const [scrollingUp, setScrollingUp] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const navbarRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.pageYOffset;

      // Check scrolling direction
      if (currentScrollPosition > lastScrollPosition) {
        setScrollingUp(false);
      } else {
        setScrollingUp(true);
      }

      // Check if the user has scrolled past the very top
      if (currentScrollPosition === 0) {
        setShowNavbar(true);
      } else {
        setShowNavbar(scrollingUp);
      }

      // Update last scroll position
      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollPosition, scrollingUp]);

  const navbarStyle = {
    boxShadow: (!showNavbar || window.pageYOffset === 0) ? "none" : "0 4px 10px rgba(0, 0, 0, 0.2)",
    display: showNavbar ? "block" : "none",
  };


  function open_navbarLinks() {
    if (navbarLinks.current.getAttribute("isopened") === "false") {
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
      <div className="navbar-cont" ref={navbarRef} style={navbarStyle}>
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
              <li>
                  <a href="#techstack">
                    <span className="linkHighlight">02.</span> Tech Stack
                  </a>
                </li>
              <li>
                  <a href="#experienceANDwork">
                    <span className="linkHighlight">03.</span> Experience / Work
                  </a>
                </li>
                <li>
                <a href="#education">
                  <span className="linkHighlight">04.</span> Education
                </a>
              </li>
              <li>
                <a href="#myProjects">
                  <span className="linkHighlight">05.</span> Projects
                </a>
              </li>
                <li>
                  <a href="#contactMe">
                    <span className="linkHighlight">06.</span> Contact
                  </a>
                </li>
            </ol>
            <div>
              <a
                className="resume-button"
                href="/Resume - Full Stack Web Developer - Okeke Divine-Vessel.pdf"
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
