import React from 'react'
import TabBadgeComponent from './TabBadgeComponent';
import { useClickTracking } from '../hooks/useClickTracking';
import { useInView } from '../hooks/useInView';

export default function ProjectItemComponent(props) {
  const trackClick = useClickTracking('ProjectItem');
  const openLinkInNewTab = props.openLinkInNewTab;
  const projectDirection = props.projectDirection;
  const projectTitle = props.projectTitle;
  const projectDescription = props.projectDescription;
  const projectTags = props.projectTags;
  const projectLinks = props.projectLinks;
  const projectCoverImage = props.projectCoverImage;
  const projectSlideShowImages = props.projectSlideShowImages;

  const [componentRef, isInView] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

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

  const handleImageClick = () => {
    trackClick('Project_Image', projectTitle);
    openFullscreen();
  };

  const handleSlideshowControl = (action) => {
    trackClick(`Slideshow_${action}`, projectTitle);
  };

  // Combine cover image with slideshow images if available
  const allImages = [projectCoverImage, ...(projectSlideShowImages || [])].filter(Boolean);
  const hasMultipleImages = allImages.length > 1;

  // State for slideshow
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const [isSlideshowPlaying, setIsSlideshowPlaying] = React.useState(hasMultipleImages);
  const [isFullscreen, setIsFullscreen] = React.useState(false);

  // Auto-advance slideshow ONLY when component is in view
  React.useEffect(() => {
    if (!hasMultipleImages || !isSlideshowPlaying || isFullscreen || !isInView) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [hasMultipleImages, isSlideshowPlaying, isFullscreen, allImages.length, isInView]);

  // Handle fullscreen mode
  const openFullscreen = () => {
    setIsFullscreen(true);
    setIsSlideshowPlaying(false);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    if (hasMultipleImages) {
      setIsSlideshowPlaying(true);
    }
  };

  // Navigate images
  const goToNextImage = (e) => {
    e && e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % allImages.length);
    setIsSlideshowPlaying(false)
  };

  const goToPrevImage = (e) => {
    e && e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + allImages.length) % allImages.length);
    setIsSlideshowPlaying(false)
  };

  // Project tags components
  const projectTagsComponents = projectTags.map((tag, index) => (
    <TabBadgeComponent key={index} variant="tech" size="small">
      {tag}
    </TabBadgeComponent>
  ));

  // Project link components
  const projectLinkComponents = Object.keys(projectLinks).map((link) => {
    if (link === "github" && projectLinks[link] !== null) {
      return (
        <div
          key={link}
          className="projectLinkIcon"
          onClick={handleGithubClick}
        >
          <i className="ri-github-line remix-icon"></i>
        </div>
      );
    } else if (link === "livePreview" && projectLinks[link] !== null) {
      return (
        <div
          key={link}
          className="projectLinkIcon"
          onClick={handleLivePreviewClick}
        >
          <i className="ri-external-link-line remix-icon"></i>
        </div>
      );
    }
    return null;
  });

  // Slideshow controls component
  const slideshowControls = hasMultipleImages && (
    <div className="slideshow-controls">
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToPrevImage();
        }}
        className="slideshow-nav-btn"
      >
        <i className="ri-arrow-left-s-line remix-icon"></i>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsSlideshowPlaying(!isSlideshowPlaying);
        }}
        className="slideshow-play-pause"
      >
        <i className={`remix-icon ${isSlideshowPlaying ? "ri-pause-line" : "ri-play-fill"}`}></i>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          goToNextImage();
        }}
        className="slideshow-nav-btn"
      >
        <i className="ri-arrow-right-s-line remix-icon"></i>
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setIsFullscreen(true);
        }}
        className="slideshow-nav-btn"
      >
        <i className="ri-fullscreen-line remix-icon"></i>
      </button>
    </div>
  );

  // Fullscreen modal
  const fullscreenModal = isFullscreen && (
    <div className="fullscreen-modal" onClick={closeFullscreen}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={closeFullscreen}>
          <i className="ri-close-line remix-icon"></i>
        </button>
        <img
          src={allImages[currentImageIndex]}
          alt="Project in full screen"
          className="fullscreen-image"
        />
        {hasMultipleImages && (
          <div className="modal-controls">
            <button onClick={goToPrevImage} className="modal-nav-btn">
              <i className="ri-arrow-left-s-line remix-icon"></i>
            </button>
            <div className="image-counter">
              {currentImageIndex + 1} / {allImages.length}
            </div>
            <button onClick={goToNextImage} className="modal-nav-btn">
              <i className="ri-arrow-right-s-line remix-icon"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );

  // Image display with slideshow capability
  const projectImageComponent = (
    <div className="projectImage" onClick={openFullscreen}>
      <img
        src={allImages[currentImageIndex]}
        alt="Project Image"
        className="project-image"
      />
      {hasMultipleImages && (
        <div className="slideshow-indicator">
          <div className="slideshow-dots">
            {allImages.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === currentImageIndex ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
              ></span>
            ))}
          </div>
        </div>
      )}
      {slideshowControls}
    </div>
  );

  // Conditional rendering based on project direction
  return (
    <div ref={componentRef}> {/* Add the ref here to track visibility */}
      {fullscreenModal}
      {projectDirection === "left" ? (
        <div className="projectContainer projectContainerLayout1">
          <div className="left">{projectImageComponent}</div>
          <div className="right">
            <div className="featuredProject text-primary">Featured Project</div>
            <div className="projectName">{projectTitle}</div>
            <div
              className="projectInfo"
              dangerouslySetInnerHTML={{ __html: projectDescription }}
            />
            <div className="projectsTags">{projectTagsComponents}</div>
            <div className="projectsIcons">{projectLinkComponents}</div>
          </div>
        </div>
      ) : (
        <div className="projectContainer projectContainerLayout2">
          <div className="right">
            <div className="featuredProject text-primary">Featured Project</div>
            <div className="projectName">{projectTitle}</div>
            <div
              className="projectInfo"
              dangerouslySetInnerHTML={{ __html: projectDescription }}
            />
            <div className="projectsTags">{projectTagsComponents}</div>
            <div className="projectsIcons">{projectLinkComponents}</div>
          </div>
          <div className="left">{projectImageComponent}</div>
        </div>
      )}
    </div>
  );
}