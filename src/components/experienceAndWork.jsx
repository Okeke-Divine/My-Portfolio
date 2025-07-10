import { useState } from "react";

export default function ExperienceAndWork(props) {
  const [currentExp, setCurrentExp] = useState(0);
  
  const experiences = [
    {
      name: "Ilanafuse",
      exp: (
        <>
          <div className="highlitedTabTitle">
            Full Stack Engineer @
            <span className="text-primary" style={{ marginLeft: "5px" }}>
              Ilanafuse
            </span>
          </div>
          <div className="highlitedTabSubTitle">August 2024 - Present</div>
          <div className="highlitedTabContent">
            <ul>
              <li>
                <b>Built a comprehensive FHIR server from scratch</b> to enable seamless health data exchange across CCDA, HL7, and FHIR standards
              </li>
              <li>
                <b>Developed an EHR frontend</b> with multi-server integration, OAuth management, and secure credential handling using two-way encryption
              </li>
              <li>
                <b>Created an interactive FHIR resource browser</b> with dynamic query building - essentially Postman for healthcare data
              </li>
              <li>
                <b>Implemented auth flows</b> that securely connect both internal and external FHIR servers
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      name: "Fluxinet",
      exp: (
        <>
          <div className="highlitedTabTitle">
            Ex-Technical Co-Founder @
            <span className="text-primary" style={{ marginLeft: "5px" }}>
              Fluxinet
            </span>
          </div>
          <div className="highlitedTabSubTitle">Mar 2024 - Mar 2025</div>
          <div className="highlitedTabContent">
            <ul>
              <li>
                <b>Built and launched an inventory SaaS</b> that replaced pen-and-paper systems for 700+ Nigerian businesses
              </li>
              <li>
                <b>Handled full-stack development</b> including security implementation (rate limiting, encryption)
              </li>
              <li>
                <b>Integrated multi-currency payments</b> (USD & NGN) for business subscriptions
              </li>
              <li>
                <b>Continuously refined product</b> based on user feedback from active customers
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      name: "Jujora",
      exp: (
        <>
          <div className="highlitedTabTitle">
            Lead Engineer @
            <span className="text-primary" style={{ marginLeft: "5px" }}>
              Jujora
            </span>
          </div>
          <div className="highlitedTabSubTitle">Jan 2024 - June 2024</div>
          <div className="highlitedTabContent">
            <ul>
              <li>
                <b>Led a 4-developer team</b> to build a farmer-to-buyer platform that increased farmer profits by 40%
              </li>
              <li>
                <b>Designed transaction dashboard</b> used by board of directors for decision-making
              </li>
              <li>
                <b>Integrated secure payment gateway</b> handling thousands of transactions
              </li>
            </ul>
          </div>
        </>
      ),
    }
  ];

  return (
    <section className="experienceANDwork" id="experience">
      <div className="sectionTitle">
        <div className="text-primary font-mono">{props.count}</div>
        <div className="font-mono">Where I've Built Things</div>
        <div className="horiLine">
          <div className="horiLineMain"></div>
        </div>
      </div>
      
      <div className="eAw">
        <div className="left">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={currentExp === index ? "active" : ""}
              onClick={() => setCurrentExp(index)}
            >
              {exp.name}
            </div>
          ))}
        </div>
        
        <div className="right">
          {experiences[currentExp].exp}
        </div>
      </div>
    </section>
  );
}