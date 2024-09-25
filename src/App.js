import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/home/Home";
import Footer from "./component/Footer/Footer";
import NavBar from "./component/NavBar/NavBar";
import Contact from "./component/Contact/Contact";
import About from "./component/About/About";
import FreelancerDetail from "./component/home/FreelancerCard/FreelancerDetail";
import Freelancerprofile from "./component/home/FreelancerCard/FreelancerCard";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Freelancerprofile />} />
          <Route path="/freelancer/:id" element={<FreelancerDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
