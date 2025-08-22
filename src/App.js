import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<About />} />
          <Route path="/company" element={<About />} />
          <Route path="/teams" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
