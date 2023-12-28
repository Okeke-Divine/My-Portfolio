import otherProjects from "../data/otherProjects.json"
import OtherProjectItemComponent from "./otherProjectItemComponent.js"

export default function OtherProjects(props){

  const openLinkInNewTab = props.openLinkInNewTab

	return(
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
              
             {Object.values(otherProjects['otherProjects']).map((project, index) => (
                    <OtherProjectItemComponent
                      key={index}
                      openLinkInNewTab={openLinkInNewTab}
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      links={project.links}
                    />
                  ))}

              
              </div>
            </div>
            )
}