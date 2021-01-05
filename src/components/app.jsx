import React from 'react';
import '../styles.sass';

import Navbar from './navbar/navbar.jsx';
import Hero from './hero/hero.jsx'

const App = () => {
  return <div className="app">
    <div className="container"><Navbar /></div>
    <div className="container"><Hero /></div>
  </div>
};

export default App;