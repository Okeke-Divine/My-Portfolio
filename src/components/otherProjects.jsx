import { useState, useEffect } from "react";
import otherProjects from "../data/otherProjects.json";
import OtherProjectItemComponent from "./otherProjectItemComponent.jsx";
import axios from "axios";

export default function OtherProjects(props) {
  const openLinkInNewTab = props.openLinkInNewTab;
  const [repos, setRepos] = useState([]);
  const [firstTimeLoading, setFirstTimeLoading] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [loadingComponent, setLoadingComponent] = useState("Loading...");
  const [totalRepos, setTotalRepos] = useState("-");

  useEffect(
    function () {
      if (isLoading == false) {
        setFirstTimeLoading(false);
        setLoadingComponent("");
        setTotalRepos(repos.length);
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
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div className="otherProjects">
      <div className="otherProjectsTitle">Other Noteworthy Projects</div>
      <div className="otherProjectsLinkOnGithub">
        <a href="#" className="text-primary">
          view the archieve (github)
        </a>
      </div>
      <div className="otherProjectsFlexContainer">
        {loadingComponent}
        {repos.map((repo, index) => (
          <OtherProjectItemComponent
            key={index}
            openLinkInNewTab={repo.name}
            title={repo.name}
            description={
              repo.description
                ? repo.description.length > 30
                  ? repo.description.slice(0, 30) + "..."
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
