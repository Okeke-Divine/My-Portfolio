import Typewriter from "typewriter-effect";

const TypewriterEffect = ({ text, speed, pauseFor }) => {


  return (
    <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString(text)
                        .pauseFor(pauseFor)
                        .deleteAll()
                        .typeString(text)
                        .start();
                }}
                options={{
                  delay: speed, 
                  deleteSpeed: speed, 
                }}
            />
  );
};

export default TypewriterEffect;
