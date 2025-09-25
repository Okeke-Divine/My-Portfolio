import { useScrollTracking } from '../hooks/useScrollTracking';

export default function AboutMe(props) {
  const componentRef = useScrollTracking('AboutMe', 0.3);
  const socialMedia = props.socialMedia;

  return (
    <section ref={componentRef} className="aboutMeScreen jnUoFC" id="about">
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
            My journey into code started by breaking and fixing templates on CodePen. Today, I'm a full-stack software engineer who builds products that solve real problems, like the <span className="text-primary">inventory system now used by several businesses.</span>
          </div>
          <div className="sectionContentList">
            When I'm not coding, you can find me exploring a new tech or thinking about the next product idea. I'm always open to new challenges and opportunities to learn.
          </div>
          <div className="tech-section">
            <h3 className="tech-heading">Here are a few technologies I've been working with recently:</h3>
            <ul className="tech-list">
              <li>Python</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>PHP</li>
              <li>NextJS</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="myImageCont">
          <img src={"https://avatars.githubusercontent.com/u/71028248?v=4"} className="image01md" />
          <div className="overlay"></div>
        </div>
      </div>
    </section>
  );
}
