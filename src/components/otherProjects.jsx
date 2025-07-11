import { useState, useEffect } from "react";
import otherProjects from "../data/otherProjects.json";
import OtherProjectItemComponent from "./otherProjectItemComponent.jsx";
import axios from "axios";

export default function OtherProjects(props) {
  const openLinkInNewTab = props.openLinkInNewTab;
  const socialMedia = props.socialMedia;

  const [repos, setRepos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const [loadingComponent, setLoadingComponent] = useState("Loading...");

  const api = "https://api.github.com/users/okeke-divine/repos?sort=pushed";

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(api);
        setRepos(response.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false); // Fix this to avoid stuck loading
      }
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    if (!isLoading) setLoadingComponent("");
  }, [isLoading]);

  const displayedRepos = showAll ? repos : repos.slice(0, 9);

  return (
    <div className="otherProjects">
      <div className="otherProjectsTitle">Other Noteworthy Projects</div>
      <div className="otherProjectsLinkOnGithub">
        <a href={socialMedia.mySocials.github} target="_blank" className="text-primary">
          view the archive (github)
        </a>
      </div>

      <div className="otherProjectsFlexContainer">
        {loadingComponent}
        {displayedRepos.map((repo, index) => (
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

      {repos.length > 9 && (
        <div className="toggleShowMoreBtn text-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="btn-2 btn-sm btn-hover-2 transition-300"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
}
