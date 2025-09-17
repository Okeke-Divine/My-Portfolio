import { useRef, useState, useEffect } from "react";

export default function Navbar(props) {
  const navbarLinks = useRef();
  const expandButtonIcon = useRef();
  const navbarRef = useRef();

  const socialMedia = props.socialMedia;
  const mySocials = socialMedia.mySocials;

  const [scrollingUp, setScrollingUp] = useState(true);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

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

  // Effect to handle screen resize
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobileView(mobile);

      // Reset navbar display based on screen size
      if (navbarLinks.current) {
        if (mobile) {
          // On mobile: hide the menu if it was previously closed
          if (navbarLinks.current.getAttribute("isopened") === "false") {
            navbarLinks.current.style.display = "none";
          } else {
            navbarLinks.current.style.display = "block";
          }
        } else {
          // On desktop: always show the menu
          navbarLinks.current.style.display = "block";
          expandButtonIcon.current.setAttribute("class", "fa fa-bars");
          navbarLinks.current.setAttribute("isopened", "false");
          setIsMobileMenuOpen(false);
        }
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial call to set correct display
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Effect to handle click outside of navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if we're on mobile and menu is open
      if (isMobileView &&
        isMobileMenuOpen &&
        navbarLinks.current &&
        !navbarLinks.current.contains(event.target) &&
        !event.target.closest('.expandButton')) {
        closeNavbar();
      }
    };

    // Add event listener when mobile menu is open
    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    // Clean up
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen, isMobileView]);

  const navbarStyle = {
    boxShadow: (!showNavbar || window.pageYOffset === 0) ? "none" : "0 4px 10px rgba(0, 0, 0, 0.2)",
    display: showNavbar ? "block" : "none",
  };

  const open_navbarLinks = () => {
    if (navbarLinks.current.getAttribute("isopened") === "false") {
      navbarLinks.current.style.display = "block";
      expandButtonIcon.current.setAttribute("class", "fa fa-times");
      navbarLinks.current.setAttribute("isopened", "true");
      setIsMobileMenuOpen(true);
    } else {
      closeNavbar();
    }
  };

  const closeNavbar = () => {
    // Only apply mobile-specific closing behavior on mobile view
    if (isMobileView) {
      navbarLinks.current.style.display = "none";
      expandButtonIcon.current.setAttribute("class", "fa fa-bars");
      navbarLinks.current.setAttribute("isopened", "false");
      setIsMobileMenuOpen(false);
    }
  };

  // Function to handle link clicks - hides navbar on all screen sizes
  const handleLinkClick = (e) => {
    // Close mobile menu if open
    if (isMobileView) {
      closeNavbar();
    }

    // Hide the navbar completely after a short delay to allow smooth scrolling
    setTimeout(() => {
      setShowNavbar(false);
    }, 100);

    // Allow default anchor behavior (smooth scrolling)
    // The timeout ensures the navbar hides after the scroll begins
  };

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
                <a href="#about" onClick={handleLinkClick}>
                  <span className="linkHighlight">01.</span> About
                </a>
              </li>
              <li>
                <a href="#experience" onClick={handleLinkClick}>
                  <span className="linkHighlight">02.</span> Experience / Work
                </a>
              </li>
              <li>
                <a href="#myProjects" onClick={handleLinkClick}>
                  <span className="linkHighlight">03.</span> Projects
                </a>
              </li>
              <li>
                <a href="#contactMe" onClick={handleLinkClick}>
                  <span className="linkHighlight">04.</span> Contact
                </a>
              </li>
            </ol>
          </div>

          <div className="navbar-action-buttons">
            <div>
              <a
                className="resume-button btn-hover-1 transition-300"
                href={mySocials["linkedin"]}
                target="_blank"
              >
                <span>
                  Let's talk
                </span>
              </a>
            </div>

            <div className="expandButton">
              <div onClick={open_navbarLinks}>
                <button>
                  <i ref={expandButtonIcon} className="fa fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}