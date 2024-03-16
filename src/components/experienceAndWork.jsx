import { useState } from "react";
export default function ExperienceAndWork() {
  const [currentExp, setCurrentExp] = useState(0);
  const experiences = [
    {
      name: "Marokug (Jan 2024 - P)",
      exp: (
        <>
          <div className="highlitedTabTitle">
            Senior Full Stack Web Dev @
            <a
              href="https://marokug.vercel.app/"
              style={{ marginLeft: "5px" }}
              target="_blank"
              className="text-primary"
            >
              Marokug
            </a>
          </div>
          <div className="highlitedTabSubTitle">January 2024 - Present</div>
          <div className="highlitedTabContent">
            <ul>
              <li>
                <b>
                  Spearheaded the development of Marokug, an educational
                  platform empowering students to learn courses, participate in
                  quizzes and exams, and explore various learning materials.
                </b>{" "}
                Utilized a modern tech stack including React, Tailwind CSS,
                Django, and MySQL to deliver a user-friendly and scalable web
                application.
              </li>
              <li>
                <b>
                  Architected and implemented robust back-end systems for
                  various projects, leveraging Django's robust framework and
                  MySQL's efficient database management capabilities.
                </b>{" "}
                Ensured data integrity, security, and scalability to meet the
                evolving needs of the applications.
              </li>
              <li>
                <b>
                  Collaborated effectively with cross-functional teams,
                  including designers and front-end developers, to translate
                  design mockups into functional and responsive user interfaces
                  using React and Tailwind CSS.
                </b>{" "}
                Delivered pixel-perfect experiences that exceeded user
                expectations.
              </li>
              <li>
                <b>
                  Played a key role in troubleshooting and resolving complex
                  technical issues, ensuring the smooth operation and
                  performance of multiple web applications.
                </b>{" "}
                Maintained a deep understanding of various technologies to
                identify and rectify issues efficiently.
              </li>
            </ul>
          </div>
        </>
      ),
    },
    {
      name: "Jujora (Mar 2024 - P)",
      exp: (
        <>
          <div className="highlitedTabTitle">
            Frontend Web Deb @
            <a href="#" style={{ marginLeft: "5px" }} className="text-primary">
              Jujora
            </a>
          </div>
          <div className="highlitedTabSubTitle">March 2024 - Present</div>
          <div className="highlitedTabContent">
            <ul>
              <li>
                <b>Collaborated effectively with cross-functional teams, including
                designers and front-end developers, to translate design mockups
                into functional and responsive user interfaces</b> using React (Next.js) and
                Tailwind CSS..
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
      <div className="sectionTitle">
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
