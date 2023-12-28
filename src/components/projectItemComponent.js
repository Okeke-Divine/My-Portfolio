export default function ProjectItemComponent(props){

  const socialMedia = props.socialMedia
  const openLinkInNewTab = props.openLinkInNewTab

	const projectDirection = props.projectDirection
	const projectTitle = props.projectTitle
	const projectDescription = props.projectDescription
	const projectTags = props.projectTags
	const projectLinks = props.projectLinks
  const projectCoverImage = props.projectCoverImage


  const projectTagsComponents = []
  
  const projectLinkComponents = Object.keys(projectLinks).map(link => {
    if (link === 'github' && projectLinks[link] !== null) {
      return (
        <div key={link} className="projectLinkIcon" onClick={(e) => openLinkInNewTab(projectLinks[link])}>
          <i className="fa fa-github"></i>
        </div>
      );
    } else if (link === 'livePreview' && projectLinks[link] !== null) {
      return (
        <div key={link} className="projectLinkIcon" onClick={(e) => openLinkInNewTab(projectLinks[link])}>
          <i className="fa fa-external-link"></i>
        </div>
      );
    }
    return null;
  });

  // console.log(projectCoverImage)

  const projectCoverImageComponent = [];
  if(projectCoverImage != null){
    projectCoverImageComponent.push(
      <img key={projectTitle+" Project Image"} src={projectCoverImage} alt="Project Image" className="project-image" />
    )
  }


  projectTags.forEach((tag, index) => {
    projectTagsComponents.push(<div key={index} className="projectTags">{tag}</div>)
  })




	// conditonal rendering
	return(
		<div>
			{projectDirection === 'left' ? (
	        	<div className="projectContainer projectContainerLayout1">
              <div className="left">
                <div className="projectImage">
                  {projectCoverImageComponent}
                </div>
              </div>
              <div className="right">
                <div className="featuredProject text-primary">
                  Featured Project
                </div>
                <div className="projectName">{projectTitle}</div>
                <div className="projectInfo">
                  {projectDescription}
                </div>
                <div className="projectsTags">
                  {projectTagsComponents}
                </div>
                <div className="projectsIcons">
                  {projectLinkComponents}
                </div>
              </div>
            </div>
	     	) : (
	        	<div className="projectContainer projectContainerLayout2">
              <div className="right">
                <div className="featuredProject text-primary">
                  Featured Project
                </div>
                <div className="projectName">{projectTitle}</div>
                <div className="projectInfo">
                  {projectDescription}
                </div>
                <div className="projectsTags">
                  {projectTagsComponents}
                </div>
                <div className="projectsIcons">
                  {projectLinkComponents}
                </div>
              </div>
              <div className="left">
                <div className="projectImage">
                  {projectCoverImageComponent}
                </div>
              </div>
            </div>
	      	)}
		</div>
	)
}