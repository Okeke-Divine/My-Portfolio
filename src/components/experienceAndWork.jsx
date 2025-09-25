import { useState } from "react";

export default function ExperienceAndWork(props) {
  const [activeCompany, setActiveCompany] = useState(0);

  const experiences = [
    {
      "name": "Ilanatech",
      "role": "Full Stack Engineer",
      "duration": "August 2024 - Present"
    },
    {
      "name": "Lily Solutions",
      "role": "Freelance Backend Developer",
      "duration": "July 2024 - August 2024"
    },
    {
      "name": "Fluxinet",
      "role": "Co-Founder & Technical Lead (Part-time)",
      "duration": "Mar 2024 - Mar 2025"
    },
    {
      "name": "Jujora",
      "role": "Lead Full Stack Engineer",
      "duration": "Jan 2024 - June 2024"
    },
    {
      "name": "Freelance Developer",
      "role": "Full Stack Engineer (Remote)",
      "duration": "Feb 2022 - Dec 2023"
    }
  ];

  return (
    <section className="experienceANDwork" id="experience">
      <div className="sectionTitle">
        <div className="text-primary font-mono">{props.count}</div>
        <div className="font-mono">Where I've Worked</div>
        <div className="horiLine">
          <div className="horiLineMain"></div>
        </div>
      </div>

      <div className="timeline-container">
        <div className="timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`timeline-item ${activeCompany === index ? 'active' : ''}`}
              onClick={() => setActiveCompany(index)}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-role-container">
                  <div className="timeline-role">{exp.role}</div>
                </div>
                <div className="timeline-company">{exp.name}</div>
                <div className="timeline-duration">{exp.duration}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}