import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';

import { useState } from 'react';


function App() {

  const [darkMode, setDarkMode] = useState(false)
  function toggleDarkMode() {
    setDarkMode(!darkMode)
  }

  return (
    <div className={darkMode && 'dark-body'}>

      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Home darkMode={darkMode} />
      <Footer darkMode={darkMode} />

    </div>
  );
}

export default App;
