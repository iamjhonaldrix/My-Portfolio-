import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './Header.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import TechStack from './TechStack.jsx';
import AllTechStack from "./AllTechStack.jsx";
import CertBadges from './CertBadges.jsx';
import Gallery from './Gallery.jsx';


import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="main">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <About />
              <TechStack />
              <CertBadges />
              <Gallery />
            </>
          }
        />

        <Route path="/tech-stack" element={<AllTechStack />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
