import React, { useState } from "react";
import Navbar from "./components/NavBar/navbar";
import MoreNavbar from "./components/MoreNavbar/moreNavbar";
import { Route, Routes, useLocation } from "react-router-dom";
import { HashRouter as Router } from "react-router-dom";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact";
import Photos from "./components/Photos/photos";
import Footer from "./components/Footer/footer";
import Gallery from "./components/Gallery/gallery";

function Content() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const location = useLocation();
  const isMorePhotos = location.pathname === "/Gallery";

  return (
    <div className="App">
      {isMorePhotos ? (
        <MoreNavbar onSelectCategory={setSelectedCategory} />
      ) : (
        <Navbar />
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Intro />
              <Skills />
              <Works />
              <Photos />
              <Contact />
              <Footer />
            </>
          }
        />
        <Route
          path="/Gallery"
          element={
            <>
              <Gallery selectedCategory={selectedCategory} />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Content />
    </Router>
  );
}

export default App;
