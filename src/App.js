import './App.css';
import "./assets/css/main.css";
import MainLayout from "./layout/main-layout.js"
import myLogo from "./assets/images/myLogo.png"

const dataBus = {
  "myLogo": myLogo
}

function App() {
  return (
    <MainLayout dataBus={dataBus} />
  );
}

export default App;
