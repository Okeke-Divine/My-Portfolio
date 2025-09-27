// App.js
import { useEffect, useState } from 'react';
import myLogo from "./assets/images/myLogo.png";
import socialMedia from "./data/socialMedia.json";
import openLinkInNewTab from "./utils/openLinkInNewTab.js";
import MainLayout from "./layout/main-layout.js";
import IntroScreen from "./components/IntroScreen.jsx";

//css
import "./assets/css/css-responsive-max-width-800.css";
import "./assets/css/css-responsive-max-width-1310.css";
import "./assets/css/css-mW-620.css";
import "./assets/css/main.css";
import "./assets/css/css-min-width-801.css"
import "./assets/css/scrollbar.css";
import "./assets/css/slideshow.css";

// remix icon
import '../node_modules/remixicon/fonts/remixicon.css';

const dataBus = {
  myLogo: myLogo,
  socialMedia: socialMedia,
  openLinkInNewTab: openLinkInNewTab,
};

function App() {
  const [introComplete, setIntroComplete] = useState(false);

  useEffect(() => {
    document.body.classList.add('intro-active');
    
    const timer = setTimeout(() => {
      document.body.classList.remove('intro-active');
      setIntroComplete(true);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {!introComplete && <IntroScreen />}
      <MainLayout dataBus={dataBus} />
    </>
  );
}

export default App;