import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Historic from './pages/Historic';
import Index from './pages/Index';
import Menu from './pages/Menu';
import Register from './pages/Register';
import Graph from './pages/Graph';

import { NormalizeStyles } from './styles/global';

function App() {

  const [userLogged, setUserLogged] = useState(false);

  function login() {
    setUserLogged(true);
  }

  return (
    <BrowserRouter>
      <NormalizeStyles />
      <Routes>
        <Route path="/" element={<Index loginFunction={login} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/historic" element={<Historic />} />
        <Route path="/graph" element={<Graph />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;