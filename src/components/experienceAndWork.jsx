import { useState } from "react";
export default function ExperienceAndWork() {
  const [currentExp, setCurrentExp] = useState(0);
  const experiences = [
    {
      name: "Marokug",
      exp: (
        <>
          <div className="highlitedTabTitle">
            Full Stack Web Developer @
            <a
              // href="https://marokug.vercel.app/"
              style={{ marginLeft: "5px" }}
              target="_blank"
              className="text-primary"
            >
              Marokug
            </a>
          </div>
          <div className="highlitedTabSubTitle">August 2023 - Apr 2024</div>
          <div className="highlitedTabContent">
            <ul>
              <li>
                Developed the back-end infrastructure for a new interactive
                assessment system, enabling efficient evaluation of student
                learning outcomes.
              </li>
              <li>
                Collaborated with UI/UX designers to convert the education
                platform UI to a more user-friendly and engaging interface,
                leading to a significant increase in student course completion
                rates.
              </li>
              <li>
                Maintained and scaled the company's database to ensure smooth
                operation and accommodate a growing user base.
              </li>
              <li>
                Created a gamified learning experience by integrating points,
                badges, and leaderboards, resulting in a 15% boost in student
                participation and interaction.
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
            Lead Frontend Web Developer @
            <a
              // href="#"
              style={{ marginLeft: "5px" }}
              className="text-primary"
            >
              Jujora
            </a>
          </div>
          <div className="highlitedTabSubTitle">March 2024 - Present</div>
          <div className="highlitedTabContent">
            <ul>
              <li>
                Collaborated with the UI/UX team to refine the e-commerce
                platform's user interface, ensuring an intuitive and
                user-friendly experience for both farmers and consumers.
              </li>
              <li>
                Worked closely with back-end developers to integrate a secure
                payment gateway, enabling seamless online transactions for
                Jujora's customers.
              </li>
              <li>
                Utilized Git for version control and collaboration, streamlining
                the development process and ensuring efficient teamwork within
                the project
              </li>
            </ul>
          </div>
        </>
      ),
    },
  ];
  function updateCurrentExp(e) {
    setCurrentExp(e);
  }
  return (
    <section className="experienceANDwork jnUoFC" id="experienceANDwork">
      <div className="sectionTitle sTitle-cs-1">
        <div className="text-primary font-mono">03.</div>
        <div className="font-mono">Where I’ve Worked</div>
        <div className="horiLine">
          <div className="horiLineMain"></div>
        </div>
      </div>
      <div className="dijdij398h8">
        Swipe/Scroll <i className="fa fa-angle-double-left"></i> left or right{" "}
        <i className="fa fa-angle-double-right"></i>
      </div>
      <div className="eAw">
        <div className="left">
          {experiences.map((experience, index) => (
            <div
              className={currentExp == index ? "active" : ""}
              onClick={() => updateCurrentExp(index)}
              key={index}
            >
              {experience.name}
            </div>
          ))}
        </div>
        <div className="right">
          <div>{experiences[currentExp].exp}</div>
        </div>
      </div>
    </section>
  );
}
