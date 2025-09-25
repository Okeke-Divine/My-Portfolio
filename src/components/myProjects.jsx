import projects from "../data/projects.json"
import OtherProjects from "./otherProjects.jsx"
import ProjectItemComponent from "./projectItemComponent.jsx"
import { useScrollTracking } from '../hooks/useScrollTracking';

export default function MyProjects(props) {
  const componentRef = useScrollTracking('MyProjects', 0.3);

  const openLinkInNewTab = props.openLinkInNewTab
  const socialMedia = props.socialMedia

  const projectsData = projects.projects

  // Array to hold JSX elements of ProjectItemComponent
  const projectComponents = [];

  for (let i = 0; i < Object.keys(projectsData).length; i++) {
    const projectName = Object.keys(projectsData)[i];
    const direction = i % 2 === 0 ? 'left' : 'right';

    const projectTitle = projectsData[projectName]["title"];
    const projectDescription = projectsData[projectName]["description"];
    const projectTags = projectsData[projectName]["tags"];
    const projectLinks = projectsData[projectName]["links"];
    const projectCoverImage = projectsData[projectName]["coverImage"];
    const projectSlideShowImages = projectsData[projectName]["slideShowImages"];

    projectComponents.push(
      <ProjectItemComponent key={i} projectDirection={direction} projectSlideShowImages={projectSlideShowImages} projectTitle={projectTitle} projectDescription={projectDescription} projectTags={projectTags} projectLinks={projectLinks} openLinkInNewTab={openLinkInNewTab} projectCoverImage={projectCoverImage} />
    );
  }

  return (
    <section ref={componentRef} className="myProjects jnUoFC" id="myProjects">
      <div className="sectionTitle sTitle-cs">
        <div className="text-primary font-mono">{props.count}</div>
        <div className="font-mono">Some Things I’ve Built</div>
        <div className="horiLine">
          <div className="horiLineMain"></div>
        </div>
      </div>


      {projectComponents}
      {/* <ProjectItemComponent projectDirection="left" /> */}

      {/*OtherProjects*/}
      <OtherProjects openLinkInNewTab={openLinkInNewTab} socialMedia={socialMedia} />

    </section>
  )
}