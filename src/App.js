import './App.css';
import Form from './components/Form'
import Nav from './components/Nav';
import React, { useState } from 'react';
import Toast from './components/Toast';
import About from './components/About'

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(false);
  const toggleDarkMode = () => {
    let mode = darkMode ? false : true;
    setDarkMode(mode);
    if (mode)
      toastie("Dark Mode has been enabled", "success");
    else
      toastie("Dark Mode has been Disabled", "success");
  }

  const toastie = (message, status) => {
    let msg = { message: message, status: status };
    setAlert(msg);
    setTimeout(() => {
      setAlert(false);
    }, 3000);
  }
  return (
    <>
    <Router>
      <Nav mode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className={`w-full ${darkMode && 'dark'}`}>
        <Toast alert={alert} />

          <Routes>
            <Route path="/" element={<Form toastie={toastie} />}>
              <Route index element={<Form />} />
            </Route>

            <Route path="/about" element={<About toastie={toastie} />}>

            </Route>
          </Routes>


        <p className="dark:text-gray-700 dark:bg-gray-900 py-4 text-center text-gray-500 text-xs">
          &copy;{new Date().getFullYear()} Wishdd.com. All rights reserved.
        </p>
      </div>
      </Router>
    </>
  );
}

export default App;
