// import "./App.css";

// stylesheets
import "./assets/css/main.css";
import "./assets/css/css-responsive-max-width-800.css";
import "./assets/css/css-responsive-max-width-1310.css";
import "./assets/css/css-mW-620.css";

// images
import myLogo from "./assets/images/myLogo.png";
// json
import socialMedia from "./data/socialMedia.json";
// utils
import openLinkInNewTab from "./utils/openLinkInNewTab.js";
// layout
import MainLayout from "./layout/main-layout.js";

const dataBus = {
  myLogo: myLogo,
  socialMedia: socialMedia,
  openLinkInNewTab: openLinkInNewTab,
};

function App() {
  return <MainLayout dataBus={dataBus} />;
}

export default App;
