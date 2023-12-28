import projects from "../data/projects.json"
import OtherProjects from "./otherProjects.js"
import ProjectItemComponent from "./projectItemComponent.js"

export default function MyProjects(props){

  const socialMedia = props.socialMedia
  const openLinkInNewTab = props.openLinkInNewTab

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

    projectComponents.push(
      <ProjectItemComponent key={i} projectDirection={direction} projectTitle={projectTitle} projectDescription={projectDescription} projectTags={projectTags} projectLinks={projectLinks} openLinkInNewTab={openLinkInNewTab} socialMedia={socialMedia} projectCoverImage={projectCoverImage} />
    );
  }

	return(
		<section className="myProjects jnUoFC" id="myProjects">
            <div className="sectionTitle">
              <div className="text-primary font-mono">03.</div>
              <div className="font-mono">Some Things I’ve Built</div>
              <div className="horiLine">
                <div className="horiLineMain"></div>
              </div>
            </div>
            
            
            {projectComponents}
            {/*<ProjectItemComponent projectDirection="left" />*/}

            {/*OtherProjects*/}
            <OtherProjects />

          </section>
          )
}