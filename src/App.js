import './App.css';
import NavBar from './components/NavBar';
import Pocetna from './pages/Pocetna';
import Kontakt from './pages/Kontakt';
import { useState, useEffect } from 'react';
import {BrowserRouter, Routes,Route} from 'react-router-dom'

const getStorageTheme = () => {
  let theme = 'light-theme';
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');
  }
  return theme;
};
function App() {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
    } else {
      setTheme('light-theme');
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar toggleTheme={toggleTheme}/>
      <Routes>
        <Route path='/' element={<Pocetna/>} /> 
        <Route path='/kontakt' element={<Kontakt />} /> 
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
