// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./Components/Home";
import Navbar from "./Components/Navbar"
import Menu from "./Components/Menu";
import Specials from "./Components/Specials";
import Career from "./Components/Career"
import Locations from "./Components/Locations";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/* <Menu /> */}
      <br></br>
      {/* <Specials /> */}
      {/* <Career /> */}
      <Locations />
    </div>
  );
}

export default App;
