import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Candidates from "./components/Candidates";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Candidates/*" element={<Candidates />} />
        <Route path="/AboutUs" element={<AboutUs />} />
      </Routes>
    
    </div>
  );
}

export default App;
