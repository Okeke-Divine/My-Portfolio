import Navbar from "../components/navbar.jsx"
import LeftSidebar from "../components/leftSidebar.jsx"
import Footer from "../components/footer.jsx"
import ContactMe from "../components/contactMe.jsx"
import MyProjects from "../components/myProjects.jsx"
import ExperienceAndWork from "../components/experienceAndWork.jsx"
import LandingScreen from "../components/landingScreen.jsx"

export default function MainLayout(props) {
  const socialMedia = props.dataBus.socialMedia;
  const openLinkInNewTab = props.dataBus.openLinkInNewTab;

  return (
    <>
      <div className="default-fon">

        {/*navbar*/}
        <Navbar socialMedia={socialMedia} dataBus={props.dataBus} />

        {/* left sidebar */}
        <LeftSidebar openLinkInNewTab={openLinkInNewTab} socialMedia={socialMedia} />

        {/* right sidebar */}
        {/* <RightSidebar openLinkInNewTab={openLinkInNewTab} socialMedia={socialMedia} /> */}

        <div className="mainContent">

          {/*LandingScreen*/}
          <LandingScreen openLinkInNewTab={openLinkInNewTab} socialMedia={socialMedia} />

          {/*AboutMe*/}
          {/* <AboutMe socialMedia={socialMedia} /> */}

          {/* my tech stack */}
          {/* <TechStack count={"01."} /> */}

          {/*ExperienceAndWork*/}
          <ExperienceAndWork count={"01."} />

          {/* My education */}
          {/* <Education count={"03."} /> */}

          {/*myProjects*/}
          <MyProjects openLinkInNewTab={openLinkInNewTab} socialMedia={socialMedia} count={"02."} />

          {/* gigs */}
          {/* <Gigs openLinkInNewTab={openLinkInNewTab} socialMedia={socialMedia} /> */}

          {/*contact me*/}
          <ContactMe openLinkInNewTab={openLinkInNewTab} socialMedia={socialMedia} count={"03."} />

          {/*footer*/}
          <Footer socialMedia={socialMedia} />

        </div>
      </div>
    </>
  );
}
