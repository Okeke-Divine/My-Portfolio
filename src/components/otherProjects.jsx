import { useState, useEffect } from "react";
import otherProjects from "../data/otherProjects.json";
import OtherProjectItemComponent from "./otherProjectItemComponent.jsx";
import axios from "axios";

export default function OtherProjects(props) {
  const openLinkInNewTab = props.openLinkInNewTab;
  const socialMedia = props.socialMedia;
  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingComponent, setLoadingComponent] = useState("Loading...");

  useEffect(
    function () {
      if (isLoading == false) {
        setLoadingComponent("");
      }
    },
    [isLoading]
  );

  const api = "https://api.github.com/users/okeke-divine/repos?sort=pushed";
  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(api);
        setRepos(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(true);
      } finally {
        // setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="otherProjects">
      <div className="otherProjectsTitle">Other Noteworthy Projects</div>
      <div className="otherProjectsLinkOnGithub">
        <a href={socialMedia.mySocials.github} target="_blank" className="text-primary">
          view the archieve (github)
        </a>
      </div>
      <div className="otherProjectsFlexContainer">
        {loadingComponent}
        {repos.map((repo, index) => (
          <OtherProjectItemComponent
            key={index}
            openLinkInNewTab={openLinkInNewTab}
            title={repo.name}
            description={
              repo.description
                ? repo.description.length > 100
                  ? repo.description.slice(0, 100) + "..."
                  : repo.description
                : "No description provided"
            }
            tags={repo.topics}
            links={{ github: repo.html_url, livePreview: repo.homepage }}
          />
        ))}
      </div>
    </div>
  );
}
