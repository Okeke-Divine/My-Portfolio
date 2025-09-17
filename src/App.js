import "./assets/css/css-responsive-max-width-800.css";
import "./assets/css/css-responsive-max-width-1310.css";
import "./assets/css/css-mW-620.css";
import "./assets/css/main.css";
import "./assets/css/css-min-width-801.css"
import "./assets/css/scrollbar.css";
import myLogo from "./assets/images/myLogo.png";
import socialMedia from "./data/socialMedia.json";
import openLinkInNewTab from "./utils/openLinkInNewTab.js";
import MainLayout from "./layout/main-layout.js";

const dataBus = {
  myLogo: myLogo,
  socialMedia: socialMedia,
  openLinkInNewTab: openLinkInNewTab,
};

function App() {
  return (
    <>
      <MainLayout dataBus={dataBus} />
    </>
  );
}

export default App;