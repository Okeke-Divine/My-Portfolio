import Navbar from "../components/navbar.js"
import LeftSidebar from "../components/leftSidebar.js"
import RightSidebar from "../components/rightSidebar.js"
import Footer from "../components/footer.js"
import ContactMe from "../components/contactMe.js"
import MyProjects from "../components/myProjects.js"
import ExperienceAndWork from "../components/experienceAndWork.js"
import AboutMe from "../components/aboutMe.js"
import LandingScreen from "../components/landingScreen.js"

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

          {/*ExperienceAndWork*/}
          {/* <ExperienceAndWork /> */}

          {/*myProjects*/}
          <MyProjects openLinkInNewTab={openLinkInNewTab} socialMedia={socialMedia} />

          {/*contact me*/}
          <ContactMe openLinkInNewTab={openLinkInNewTab} socialMedia={socialMedia} />

          {/*footer*/}
          <Footer socialMedia={socialMedia} />

        </div>
      </div>
    </>
  );
}
