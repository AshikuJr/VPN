import React from 'react';
import '../styles.sass';

import Container from './container/container.jsx';
import Navbar from './navbar/navbar.jsx';
import Hero from './hero/hero.jsx';
import Stats from './stats/stats.jsx';
import Features from './features/features.jsx';

const App = () => {
  return <div className="app">
    <main className="first">
      <Container content={<Navbar/>}/>
      <Container content={<Hero/>}/>
      <Container content={<Stats/>}/>
      <Container content={<Features/>}/>
    </main>

  </div>
};

export default App;