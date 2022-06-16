import React from 'react';
import Historic from './pages/Historic';
import Index from './pages/Index';
import Menu from './pages/Menu';
import Register from './pages/Register';
import { NormalizeStyles } from './styles/global';

function App() {
  return (
    <>
      <NormalizeStyles />
      <Historic />
    </>
  )
}

export default App;