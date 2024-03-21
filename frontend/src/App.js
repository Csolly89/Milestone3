// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./Components/Home";
import Navbar from "./Components/Navbar"
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Menu />
    </div>
  );
}

export default App;
