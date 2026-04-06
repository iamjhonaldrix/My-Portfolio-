import { useState, useEffect } from 'react';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import About from './About.jsx';
import TechStack from './TechStack.jsx';
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
    <>
    <div className="main">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <About />
      <TechStack />
      <Gallery />
      <Footer />
    </div>
    </>
  );
} 

export default App
