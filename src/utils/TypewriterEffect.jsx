import Typewriter from "typewriter-effect";

const TypewriterEffect = ({ text, speed, pauseFor }) => {
  return (
    <h3 className="big-heading ibuildt">
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(text)
            .pauseFor(pauseFor)
            .deleteAll()
            .typeString(text)
            .start()
            .callFunction(() => {
              typewriter.stop().start();
            });
        }}
        options={{
          delay: speed,
          deleteSpeed: speed,
          loop: true
        }}
      />
    </h3>
  );
};

export default TypewriterEffect;
