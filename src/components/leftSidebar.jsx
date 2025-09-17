export default function LeftSidebar(props) {
  const socialMedia = props.socialMedia
  const openLinkInNewTab = props.openLinkInNewTab

  return (<div className="sideBar sideBarLeft">
    <div></div>
    <div className="sidebarSocials">
      <div
        className="icons"
        onClick={(e) => openLinkInNewTab(socialMedia.mySocials.linkedin)}
      >
        <a className="">
          <i className="ri-linkedin-line remix-icon"></i>
        </a>
      </div>
      <div
        className="icons"
        onClick={(e) => openLinkInNewTab(socialMedia.mySocials.github)}
      >
        <a className="#">
          <i className="ri-github-line remix-icon"></i>
        </a>
      </div>
      <div
        className="icons"
        onClick={(e) => openLinkInNewTab(socialMedia.mySocials.twitter)}
      >
        <a className="">
          <i className="ri-twitter-line remix-icon"></i>
        </a>
      </div>
      <div className="lineCont">
        <div></div>
      </div>
    </div>
  </div>);
}