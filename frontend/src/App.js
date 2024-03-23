import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from "./Components/Home";
import Navbar from "./Components/Navbar"
import Menu from "./Components/Menu";
import Specials from "./Components/Specials";
import Career from "./Components/Career"
import Locations from "./Components/Locations";
import Reservation from "./Components/Reservation";
import Logreg from "./Components/Login";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/careers" element={<Career />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/reserveration" element={<Reservation />} />
          <Route path="/login" element={<Logreg />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
