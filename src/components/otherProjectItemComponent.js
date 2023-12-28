export default function OtherProjectItemComponent(props){
  	const openLinkInNewTab = props.openLinkInNewTab

  	const projectTitle = props.title
  	const projectDescription = props.description
  	const projectTags = props.tags
  	const projectLinks = props.links

 	const otherProjectTagsComponents = []
 	projectTags.forEach((tag, index) => {
    	otherProjectTagsComponents.push(<div key={index} className="otherProjectTags">{tag}</div>)
  	})

	return(
		<div className="project-inner">
                  <div className="icons">
                    <div className="">
                      <i className="fa text-primary fa-folder"></i>
                    </div>
                    <div>
				    {projectLinks.github != null ? (
				    	<div className="" onClick={(e) => openLinkInNewTab(projectLinks.github)}>
                        <i className="fa fa-github"></i>
                      </div>) : (null)}
				    {projectLinks.livePreview != null ? (
				    	<div className="" onClick={(e) => openLinkInNewTab(projectLinks.livePreview)}>
                        <i className="fa fa-external-link"></i>
                      </div>) : (null)}
                    </div>
                  </div>
                  <div className="project-title">
                    {projectTitle}
                  </div>
                  <div className="project-description">
                    {projectDescription}
                  </div>
                  <div className="project-tech-list">
                    {otherProjectTagsComponents}
                  </div>
                </div>)
}