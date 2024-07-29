export default function TechStack(props) {
  const frontend = [
    {
      icon: <i className="fab fa-react"></i>,
      name: "React",
    },
    {
      icon: <i className="fa fa-file-code"></i>,
      name: "Next.js",
    },
    {
      icon: <i className="fa fa-file-code"></i>,
      name: "Typescript",
    },
    {
      icon: <i className="fab fa-js"></i>,
      name: "jQuery",
    },
    {
      icon: <i className="fa fa-code"></i>,
      name: "Tailwind CSS",
    },
    {
      icon: <i className="fa fa-code"></i>,
      name: "Daisy UI",
    },
    {
      icon: <i className="fa fa-code"></i>,
      name: "Chakra UI",
    },
    {
      icon: <i className="fab fa-bootstrap"></i>,
      name: "Bootstrap",
    },
  ];

  const backend = [
    {
      icon: <i className="fa fa-file-code"></i>,
      name: "Next.js",
    },
    {
      icon: <i className="fab fa-python"></i>,
      name: "Python (Django)",
    },
    {
      icon: <i className="fab fa-js"></i>,
      name: "Node Js (Express)",
    },
    {
      icon: <i className="fab fa-php"></i>,
      name: "PHP (Core)",
    },
    {
      icon: <i className="fab fa-php"></i>,
      name: "PHP (Laravel)",
    },
    {
      icon: <i className="fa fa-file-code"></i>,
      name: "Go (Gin)",
    },
  ];

  const database = [
    {
      icon: <i className="fas fa-database"></i>,
      name: "MySQL",
    },
    {
      icon: <i className="fas fa-database"></i>,
      name: "PostgreSQL",
    },
    {
      icon: <i className="fas fa-database"></i>,
      name: "MongoDb",
    },
    {
      icon: <i className="fas fa-database"></i>,
      name: "Redis",
    },
  ];

  const otherTools = [
    {
      icon: <i className="fas fa-cog"></i>,
      name: "AWS",
    },
    {
      icon: <i className="fas fa-robot"></i>,
      name: "Puppeteer",
    },
    {
      icon: <i className="fab fa-git"></i>,
      name: "Git",
    },
    {
      icon: <i className="fa fa-file"></i>,
      name: "Cloudinary",
    },
    {
      icon: <i className="fas fa-clock"></i>,
      name: "Node-Cron",
    },
    {
      icon: <i className="fab fa-docker"></i>,
      name: "Docker",
    },
    {
      icon: <i className="fas fa-flask"></i>,
      name: "Postman",
    },
    {
      icon: <i className="fas fa-cog"></i>,
      name: "Prisma",
    },
    {
      icon: <i className="fas fa-cog"></i>,
      name: "Mongoose",
    },
    {
      icon: <i className="fas fa-cog"></i>,
      name: "Django ORM",
    },

  ];

  return (
    <>
      <section className="aboutMeScreen block jnUoFC" id="techstack">
        <div className="sectionTitle sTitle-cs-2">
          <div className="text-primary font-mono">{props.count}</div>
          <div className="font-mono">Tech Stack</div>
          <div className="horiLine">
            <div className="horiLineMain"></div>
          </div>
        </div>
        <div className="sectionBody techStackBody">
          {/* frontend */}
          <div className="techStackGroup">
            <div className="techStackTitle">Frontend</div>
            <div className="flex techStack-container">
              {frontend.map((lng, index) => (
                <div key={index} className="flex techStack-item">
                  <div>{lng.icon}</div>
                  <div>{lng.name}</div>
                </div>
              ))}
            </div>
          </div>
          {/* backend */}
          <div className="techStackGroup">
            <div className="techStackTitle">Backend</div>
            <div className="flex techStack-container">
              {backend.map((lng, index) => (
                <div key={index} className="flex techStack-item">
                  <div>{lng.icon}</div>
                  <div>{lng.name}</div>
                </div>
              ))}
            </div>
          </div>
          {/* database */}
          <div className="techStackGroup">
            <div className="techStackTitle">Database</div>
            <div className="flex techStack-container">
              {database.map((lng, index) => (
                <div key={index} className="flex techStack-item">
                  <div>{lng.icon}</div>
                  <div>{lng.name}</div>
                </div>
              ))}
            </div>
          </div>
          {/* other tools */}
          <div className="techStackGroup">
            <div className="techStackTitle">Other Tools</div>
            <div className="flex techStack-container">
              {otherTools.map((lng, index) => (
                <div key={index} className="flex techStack-item">
                  <div>{lng.icon}</div>
                  <div>{lng.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
