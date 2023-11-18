export default function MainLayout(props) {
  const socialMedia = props.dataBus.socialMedia;
  const openLinkInNewTab = props.dataBus.openLinkInNewTab;

  return (
    <>
      <div className="default-fon">
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

        {/* left sidebar */}
        <div className="sideBar sideBarLeft">
          <div></div>
          <div className="sidebarSocials">
            <div
              className="icons"
              onClick={(e) => openLinkInNewTab(socialMedia.mySocials.github)}
            >
              <a className="#">
                <i className="fa fa-github"></i>
              </a>
            </div>
            <div
              className="icons"
              onClick={(e) => openLinkInNewTab(socialMedia.mySocials.twitter)}
            >
              <a className="">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
            <div
              className="icons"
              onClick={(e) => openLinkInNewTab(socialMedia.mySocials.linkedin)}
            >
              <a className="">
                <i className="fa fa-linkedin"></i>
              </a>
            </div>
            <div className="lineCont">
              <div></div>
            </div>
          </div>
        </div>
        {/* right sidebar */}
        <div className="sideBar sideBarRight">
          <div></div>
          <div className="sidebarSocials">
            <div
              className="email"
              onClick={(e) =>
                openLinkInNewTab("mailto:" + socialMedia.mySocials.github)
              }
            >
              {socialMedia.mySocials.email}
            </div>
            <div className="lineCont">
              <div></div>
            </div>
          </div>
        </div>

        <div className="mainContent">
          <section className="landingScreen jnUoFC" id="me">
            <div className="hi">
              <h1>Hi, my name is</h1>
            </div>
            <div>
              <h2 className="big-heading">Okeke Divine-Vessel.</h2>
            </div>
            <div>
              <h3 className="big-heading ibuildt">
                I build things for the web.
              </h3>
            </div>
            <div className="breifIntro">
              I'm a seasoned software engineer passionate about crafting
              exceptional digital experiences. With a keen focus on creating
              accessible and human-centered products, my expertise lies in
              building robust web applications. Currently dedicated to enhancing
              user experiences at Mtalers, I strive to blend innovation and
              user-centric design for impactful solutions.
            </div>
            <div className="contactMe-1-cont">
              <button
                className="contactMe-1"
                onClick={(e) => openLinkInNewTab(socialMedia.mySocials.upwork)}
              >
                {" "}
                Hit Me Up On Upwork!
              </button>
            </div>
          </section>

          <section className="aboutMeScreen jnUoFC" id="about">
            <div className="left">
              <div className="sectionTitle">
                <div className="text-primary font-mono">01.</div>
                <div className="font-mono">About Me</div>
                <div className="horiLine">
                  <div className="horiLineMain"></div>
                </div>
              </div>
              <div className="sectionBody">
                <div className="sectionContentList">
                  Hello there, I'm Divine. My fascination with web development
                  sparked years ago, and it's been a thrilling journey ever
                  since. Embarking on my coding journey through the
                  customization of tailored templates on CodePen, I unearthed a
                  natural affinity for delving into the intricate details of
                  HTML & CSS.
                </div>

                <div className="sectionContentList">
                  My professional tenure has primarily been at Mtalers, where I
                  honed my skills and contributed extensively to various
                  projects. During my time there, I delved into diverse
                  projects, pushing boundaries and mastering new technologies.
                </div>

                <div className="sectionContentList">
                  My{" "}
                  <a
                    href={socialMedia.mySocials.github}
                    target="_blank"
                    className="text-primary "
                  >
                    Github
                  </a>{" "}
                  profile showcases a range of projects, each highlighting my
                  dedication to crafting robust and innovative solutions. From
                  web applications to repositories, I take pride in every line
                  of code I've written.
                </div>

                <div className="sectionContentList">
                  My focus remains on refining my craft and delving deeper into
                  the world of web development. Passionate about building
                  exceptional digital experiences, I'm committed to continuous
                  growth and learning in this dynamic field.
                </div>
                <div className="sectionContentList">
                  Here are a few technologies I’ve been working with recently:
                  <div className="fewTechnologies">
                    <ul>
                      <li>Html</li>
                      <li>Css</li>
                      <li>Javascript (ES6+)</li>
                      <li>React</li>
                      <li>Php</li>
                      <li>Phython (Django)</li>
                      <li>Golang (Gin)</li>
                    </ul>
                  </div>
                </div>
                <div className="sectionContentList">Signature: ODVE</div>
              </div>
            </div>
            <div className="right">
              <div className="myImageCont">
                <img src="" />
              </div>
            </div>
          </section>

          <section className="experienceANDwork jnUoFC" id="experienceANDwork">
            <div className="sectionTitle">
              <div className="text-primary font-mono">02.</div>
              <div className="font-mono">Where I’ve Worked</div>
              <div className="horiLine">
                <div className="horiLineMain"></div>
              </div>
            </div>
            <div className="eAw">
              <div className="left">
                <div>Mtalers</div>
                <div className="active">Kayric</div>
                <div>StrillVids</div>
                <div>Socials(Unamed)</div>
              </div>
              <div className="right">
                <div className="highlitedTabTitle">
                  Senior Full Stack Web Dev{" "}
                  <a href="#" className="text-primary">
                    @ Kayric
                  </a>
                </div>
                <div className="highlitedTabSubTitle">
                  November 2023 - Present
                </div>
                <div className="highlitedTabContent">
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed commodo mauris eu nisl accumsan, quis ullamcorper
                      ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Sed commodo mauris eu nisl accumsan, quis
                      ullamcorper ipsum.
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed commodo mauris eu nisl accumsan, quis ullamcorper
                      ipsum.
                    </li>
                    <li>
                      CLorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed commodo mauris eu nisl accumsan, quis ullamcorper
                      ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing
                      e
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed commodo mauris eu nisl accumsan, quis ullamcorper
                      ipsum.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="myProjects jnUoFC" id="myProjects">
            <div className="sectionTitle">
              <div className="text-primary font-mono">03.</div>
              <div className="font-mono">Some Things I’ve Built</div>
              <div className="horiLine">
                <div className="horiLineMain"></div>
              </div>
            </div>
            <div className="projectContainer projectContainerLayout1">
              <div className="left">
                <div className="projectImage"></div>
              </div>
              <div className="right">
                <div className="featuredProject text-primary">
                  Featured Project
                </div>
                <div className="projectName">Project Name</div>
                <div className="projectInfo">
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                  iTerm, and more. Available on Visual Studio Marketplace,
                  Package Control, Atom Package Manager, and npm.
                </div>
                <div className="projectsTags">
                  <div>Tag 1</div>
                  <div>Tag 2</div>
                  <div>Tag 3</div>
                  <div>Tag 4</div>
                  <div>Tag 5</div>
                </div>
                <div className="projectsIcons">
                  <div className="icon">
                    <i className="fa fa-github"></i>
                  </div>
                  <div className="icon">
                    <i className="fa fa-external-link"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="projectContainer projectContainerLayout2">
              <div className="right">
                <div className="featuredProject text-primary">
                  Featured Project
                </div>
                <div className="projectName">Project Name</div>
                <div className="projectInfo">
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                  iTerm, and more. Available on Visual Studio Marketplace,
                  Package Control, Atom Package Manager, and npm.
                </div>
                <div className="projectsTags">
                  <div>Tag 1</div>
                  <div>Tag 2</div>
                  <div>Tag 3</div>
                  <div>Tag 4</div>
                  <div>Tag 5</div>
                </div>
                <div className="projectsIcons">
                  <div className="icon">
                    <i className="fa fa-github"></i>
                  </div>
                  <div className="icon">
                    <i className="fa fa-external-link"></i>
                  </div>
                </div>
              </div>
              <div className="left">
                <div className="projectImage"></div>
              </div>
            </div>
            <div className="projectContainer projectContainerLayout1">
              <div className="left">
                <div className="projectImage"></div>
              </div>
              <div className="right">
                <div className="featuredProject text-primary">
                  Featured Project
                </div>
                <div className="projectName">Project Name</div>
                <div className="projectInfo">
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                  iTerm, and more. Available on Visual Studio Marketplace,
                  Package Control, Atom Package Manager, and npm.
                </div>
                <div className="projectsTags">
                  <div>Tag 1</div>
                  <div>Tag 2</div>
                  <div>Tag 3</div>
                  <div>Tag 4</div>
                  <div>Tag 5</div>
                </div>
                <div className="projectsIcons">
                  <div className="icon">
                    <i className="fa fa-github"></i>
                  </div>
                  <div className="icon">
                    <i className="fa fa-external-link"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="projectContainer projectContainerLayout2">
              <div className="right">
                <div className="featuredProject text-primary">
                  Featured Project
                </div>
                <div className="projectName">Project Name</div>
                <div className="projectInfo">
                  A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                  iTerm, and more. Available on Visual Studio Marketplace,
                  Package Control, Atom Package Manager, and npm.
                </div>
                <div className="projectsTags">
                  <div>Tag 1</div>
                  <div>Tag 2</div>
                  <div>Tag 3</div>
                  <div>Tag 4</div>
                  <div>Tag 5</div>
                </div>
                <div className="projectsIcons">
                  <div className="icon">
                    <i className="fa fa-github"></i>
                  </div>
                  <div className="icon">
                    <i className="fa fa-external-link"></i>
                  </div>
                </div>
              </div>
              <div className="left">
                <div className="projectImage"></div>
              </div>
            </div>
            <div className="otherProjects">
              <div className="otherProjectsTitle">
                Other Noteworthy Projects
              </div>
              <div className="otherProjectsLinkOnGithub">
                <a href="#" className="text-primary">
                  view the archieve (github)
                </a>
              </div>
              <div className="otherProjectsFlexContainer">
                <div className="project-inner">
                  <div className="icons">
                    <div className="">
                      <i className="fa text-primary fa-folder"></i>
                    </div>
                    <div>
                      <div className="">
                        <i className="fa fa-github"></i>
                      </div>
                      <div className="">
                        <i className="fa fa-external-link"></i>
                      </div>
                    </div>
                  </div>
                  <div className="project-title">
                    Integrating Project 1 with Linux Server
                  </div>
                  <div className="project-description">
                    Building a custom multisite compatible Project plugin to
                    build global search with Linux.
                  </div>
                  <div className="project-tech-list">
                    <div>Php</div>
                    <div>Html</div>
                    <div>Css</div>
                  </div>
                </div>
                <div className="project-inner">
                  <div className="icons">
                    <div className="">
                      <i className="fa text-primary fa-folder"></i>
                    </div>
                    <div className="">
                      <i className="fa fa-external-link"></i>
                    </div>
                  </div>
                  <div className="project-title">
                    Integrating Project 1 with Linux Server
                  </div>
                  <div className="project-description">
                    Building a custom multisite compatible Project plugin to
                    build global search with Linux.
                  </div>
                  <div className="project-tech-list">
                    <div>Php</div>
                    <div>Html</div>
                    <div>Css</div>
                  </div>
                </div>
                <div className="project-inner">
                  <div className="icons">
                    <div className="">
                      <i className="fa text-primary fa-folder"></i>
                    </div>
                    <div className="">
                      <i className="fa fa-external-link"></i>
                    </div>
                  </div>
                  <div className="project-title">
                    Integrating Project 1 with Linux Server
                  </div>
                  <div className="project-description">
                    Building a custom multisite compatible Project plugin to
                    build global search with Linux.
                  </div>
                  <div className="project-tech-list">
                    <div>Php</div>
                    <div>Html</div>
                    <div>Css</div>
                  </div>
                </div>
                <div className="project-inner">
                  <div className="icons">
                    <div className="">
                      <i className="fa text-primary fa-folder"></i>
                    </div>
                    <div className="">
                      <i className="fa fa-external-link"></i>
                    </div>
                  </div>
                  <div className="project-title">
                    Integrating Project 1 with Linux Server
                  </div>
                  <div className="project-description">
                    Building a custom multisite compatible Project plugin to
                    build global search with Linux.
                  </div>
                  <div className="project-tech-list">
                    <div>Php</div>
                    <div>Html</div>
                    <div>Css</div>
                  </div>
                </div>
                <div className="project-inner">
                  <div className="icons">
                    <div className="">
                      <i className="fa text-primary fa-folder"></i>
                    </div>
                    <div className="">
                      <i className="fa fa-external-link"></i>
                    </div>
                  </div>
                  <div className="project-title">
                    Integrating Project 1 with Linux Server
                  </div>
                  <div className="project-description">
                    Building a custom multisite compatible Project plugin to
                    build global search with Linux.
                  </div>
                  <div className="project-tech-list">
                    <div>Php</div>
                    <div>Html</div>
                    <div>Css</div>
                  </div>
                </div>
                <div className="project-inner">
                  <div className="icons">
                    <div className="">
                      <i className="fa text-primary fa-folder"></i>
                    </div>
                    <div className="">
                      <i className="fa fa-external-link"></i>
                    </div>
                  </div>
                  <div className="project-title">
                    Integrating Project 1 with Linux Server
                  </div>
                  <div className="project-description">
                    Building a custom multisite compatible Project plugin to
                    build global search with Linux.
                  </div>
                  <div className="project-tech-list">
                    <div>Php</div>
                    <div>Html</div>
                    <div>Css</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="contactMe jnUoFC" id="contactMe">
            <div className="contactMeTinyTitle">
              <div>04.</div>
              <div>What’s Next?</div>
            </div>
            <div>
              <h2 className="big-heading getInTouch">Get in Touch</h2>
            </div>
            <div className="contactMeInfo">
              I am actively seeking job opportunities and open to exciting
              offers in the field. Ready to contribute and eager to explore new
              roles and challenges.
            </div>
            <div className="sayHello">
              <button
                className="sayHelloButton"
                onClick={(e) =>
                  openLinkInNewTab("mailto:" + socialMedia.mySocials.github)
                }
              >
                Say Hello
              </button>
            </div>
          </section>

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
        </div>
      </div>
    </>
  );
}
