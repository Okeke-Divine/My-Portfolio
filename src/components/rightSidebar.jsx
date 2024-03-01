export default function RightSidebar(props){
	const socialMedia = props.socialMedia
	const openLinkInNewTab = props.openLinkInNewTab
	
	return(
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
        </div>)
}