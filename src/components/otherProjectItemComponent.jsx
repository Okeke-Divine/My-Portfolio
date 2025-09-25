import TabBadgeComponent from './TabBadgeComponent';
import { useClickTracking } from '../hooks/useClickTracking';

export default function OtherProjectItemComponent(props) {
  const trackClick = useClickTracking('OtherProjectItem');
  const openLinkInNewTab = props.openLinkInNewTab

  const projectTitle = props.title
  const projectDescription = props.description
  const projectTags = props.tags
  const projectLinks = props.links

  const otherProjectTagsComponents = projectTags.map((tag, index) => (
    <TabBadgeComponent key={index} variant="muted" size="small">
      {tag}
    </TabBadgeComponent>
  ));

  const handleGithubClick = (e) => {
    e.stopPropagation();
    trackClick('Github_Link', projectTitle);
    openLinkInNewTab(projectLinks.github);
  };

  const handleLivePreviewClick = (e) => {
    e.stopPropagation();
    trackClick('LivePreview_Link', projectTitle);
    openLinkInNewTab(projectLinks.livePreview);
  };

  const handleProjectCardClick = () => {
    trackClick('Project_Card', projectTitle);
  };

  return (
    <div className="project-inner" onClick={handleProjectCardClick}>
      <div className="icons">
        <div className="">
          <i className="fa text-primary fa-folder"></i>
        </div>
        <div>
          {(projectLinks.github != null || projectLinks.github != "" ) ? (
            <div className="projectLinkIcon" onClick={handleGithubClick}>
              <i className="ri-github-line remix-icon"></i>
            </div>) : (null)}
          {(projectLinks.livePreview != null & projectLinks.livePreview != "") ? (
            <div className="projectLinkIcon" onClick={handleLivePreviewClick}>
              <i className="ri-external-link-line remix-icon"></i>
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