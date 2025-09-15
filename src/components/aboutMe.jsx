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
            My journey into code started by breaking and fixing templates on CodePen. Today, I'm a full-stack engineer who builds products that solve real problems, like the inventory system now used by several businesses.
          </div>
          <div className="sectionContentList">
            When I'm not coding, you can find me exploring a new tech or thinking about the next product idea. I'm always open to new challenges and opportunities to learn.
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
