import React from 'react';
import Index from './pages/Index';
import Menu from './pages/Menu';
import Register from './pages/Register';
import { NormalizeStyles } from './styles/global';

function App() {
  return (
    <>
      <NormalizeStyles />
      <Menu />
    </>
  )
}

export default App;