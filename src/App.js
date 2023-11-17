import "./App.css";
import "./assets/css/main.css";
import MainLayout from "./layout/main-layout.js";
import myLogo from "./assets/images/myLogo.png";
import socialMedia from "./data/socialMedia.json";
import openLinkInNewTab from "./utils/openLinkInNewTab.js";

const dataBus = {
  myLogo: myLogo,
  socialMedia: socialMedia,
  openLinkInNewTab: openLinkInNewTab
};

function App() {
  return <MainLayout dataBus={dataBus} />;
}

export default App;
