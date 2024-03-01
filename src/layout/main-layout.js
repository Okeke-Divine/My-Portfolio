import Navbar from "../components/navbar.jsx"
import LeftSidebar from "../components/leftSidebar.jsx"
import RightSidebar from "../components/rightSidebar.jsx"
import Footer from "../components/footer.jsx"
import ContactMe from "../components/contactMe.jsx"
import MyProjects from "../components/myProjects.jsx"
import ExperienceAndWork from "../components/experienceAndWork.jsx"
// import Gigs from "../components/gigs.js"
import AboutMe from "../components/aboutMe.jsx"
import LandingScreen from "../components/landingScreen.jsx"
import TechStack from "../components/techStack.jsx"
import Education from "../components/education.jsx"

export default function MainLayout(props) {
  const socialMedia = props.dataBus.socialMedia;
  const openLinkInNewTab = props.dataBus.openLinkInNewTab;

  return (
    <>
      <div className="default-fon">

        {/*navbar*/}
        <Navbar dataBus={props.dataBus} />

        {/* left sidebar */}
        <LeftSidebar openLinkInNewTab={openLinkInNewTab} socialMedia={socialMedia} />

        {/* right sidebar */}
        <RightSidebar openLinkInNewTab={openLinkInNewTab} socialMedia={socialMedia} />

        <div className="mainContent">

          {/*LandingScreen*/}
          <LandingScreen openLinkInNewTab={openLinkInNewTab} socialMedia={socialMedia} />

          {/*AboutMe*/}
          <AboutMe socialMedia={socialMedia} />

          {/* my tech stack */}
          <TechStack />

          {/*ExperienceAndWork*/}
          <ExperienceAndWork />

          {/* My education */}
          <Education />

          {/*myProjects*/}
          <MyProjects openLinkInNewTab={openLinkInNewTab} socialMedia={socialMedia} />

          {/* gigs */}
          {/* <Gigs openLinkInNewTab={openLinkInNewTab} socialMedia={socialMedia} /> */}

          {/*contact me*/}
          <ContactMe openLinkInNewTab={openLinkInNewTab} socialMedia={socialMedia} />

          {/*footer*/}
          <Footer socialMedia={socialMedia} />

        </div>
      </div>
    </>
  );
}
