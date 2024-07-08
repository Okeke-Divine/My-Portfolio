import { useState } from "react";
export default function ExperienceAndWork(props) {
  const [currentExp, setCurrentExp] = useState(0);
  const experiences = [
    {
      name: "Jujora",
      exp: (
        <>
          <div className="highlitedTabTitle">
            Lead Full Stack Web Developer @
            <a
              // href="#"
              style={{ marginLeft: "5px" }}
              className="text-primary"
            >
              Jujora
            </a>
          </div>
          <div className="highlitedTabSubTitle">Jan 2024 - June 2024</div>
          <div className="highlitedTabContent">
            <ul>
              <li>
                <b>Led a team of 4 developers</b>, resulting in a 40% increase in
                development velocity through optimized workflows and code
                reviews.
              </li>
              <li>
                <b>Designed and Coded an e-commerce platform</b> connecting farmers
                directly with buyers, <b>reducing middlemen costs by 25%</b> and<b>increasing farmer profits by 40% within the first quarter.</b>
              </li>
              <li>
                <b>Reported directly to CPO:</b> Engineering lead for designing and
                developing the companys’ transaction dashboard that provides a
                rich visual summary of daily user purchase patterns powered by
                Google Chart. <b>Used by the board of directors in the
                decision-making process.</b>
              </li>
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
          <div className="highlitedTabSubTitle">March 2023 - Dec 2023</div>
          <div className="highlitedTabContent">
            <ul>
              <li>
                <b>Enhanced student participation and interaction by 15%</b> by
                implementing a <b>gamified learning experience</b> with points, badges,
                and leaderboards
              </li>
              <li>
                <b>Increased student course completion rates by 20%</b> through
                collaboration with UI/UX designers to create a more
                user-friendly and engaging interface for thecompany's education
                platform.
              </li>
              <li>
                Developed and deployed the back-end infrastructure for a new
                interactive assessment system, enabling efficient evaluation of
                student learning outcomes for a user base of 2800+ students.
              </li>
              <li>
                Collaborated with UI/UX designers to <b>convert the education
                platform UI to a more user-friendly and engaging interface,
                leading to a significant increase in student course completion
                rates.</b>
              </li>
              <li>
                <b>Optimized and scaled the company's database</b> to ensure smooth
                operation and <b>accommodate a 300% growth in users</b>, while <b>reducing
                API latency by 50%</b> through implementing caching mechanisms and
                optimizing database queries.
              </li>
            </ul>
          </div>
        </>
      ),
    }
  ];
  function updateCurrentExp(e) {
    setCurrentExp(e);
  }
  return (
    <section className="experienceANDwork jnUoFC" id="experienceANDwork">
      <div className="sectionTitle sTitle-cs-1">
        <div className="text-primary font-mono">{props.count}</div>
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
