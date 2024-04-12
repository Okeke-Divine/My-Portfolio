import me from "../assets/images/ME.jpg";

export default function AboutMe(props) {
  const socialMedia = props.socialMedia;

  return (
    <section className="aboutMeScreen jnUoFC" id="about">
      <div className="left">
        <div className="sectionTitle">
          <div className="text-primary font-mono">01.</div>
          <div className="font-mono">About Me</div>
          <div className="horiLine">
            <div className="horiLineMain"></div>
          </div>
        </div>
        <div className="sectionBody">
          <div className="sectionContentList">
            Greetings! I'm Divine, a seasoned full stack web developer with over 7 years of
            experience. My journey began with a passion for web development,
            sparked by customizing templates on CodePen.
          </div>
          <div className="sectionContentList">
            My{" "}
            <a
              href={socialMedia.mySocials.github}
              target="_blank"
              className="text-primary "
            >
              Github
            </a>{" "}
            profile showcases a range of projects, each highlighting my
            dedication to crafting robust and innovative solutions. From web
            applications to repositories, I take pride in every line of code
            I've written.
          </div>
          <div className="sectionContentList">
            I'm committed to continuous growth and learning in this dynamic
            field, focused on refining my craft and delivering exceptional
            digital experiences.
          </div>
        </div>
        {/* <div className="sectionBody">
          <div className="sectionContentList">
            Hello there, I'm Divine. My fascination with web development sparked
            7 years ago, and it's been a thrilling journey ever since. Embarking
            on my coding journey through the customization of tailored templates
            on CodePen, I unearthed a natural affinity for delving into the
            intricate details of HTML & CSS.
          </div>

          <div className="sectionContentList">
            My professional tenure has primarily been at Marokug, where I honed
            my skills and contributed extensively to various projects. During my
            time there, I delved into diverse projects, pushing boundaries and
            mastering new technologies.
          </div>

          <div className="sectionContentList">
            My{" "}
            <a
              href={socialMedia.mySocials.github}
              target="_blank"
              className="text-primary "
            >
              Github
            </a>{" "}
            profile showcases a range of projects, each highlighting my
            dedication to crafting robust and innovative solutions. From web
            applications to repositories, I take pride in every line of code
            I've written.
          </div>

          <div className="sectionContentList">
            My focus remains on refining my craft and delving deeper into the
            world of web development. Passionate about building exceptional
            digital experiences, I'm committed to continuous growth and learning
            in this dynamic field.
          </div>
        </div> */}
      </div>
      <div className="right">
        <div className="myImageCont">
          <img src={me} className="image01md" />
        </div>
      </div>
    </section>
  );
}
