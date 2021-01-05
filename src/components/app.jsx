import React from 'react';
import '../styles.sass';

import Container from './container/container.jsx';

import Navbar from './navbar/navbar.jsx';
import Hero from './hero/hero.jsx';
import Stats from './stats/stats.jsx';
import Features from './features/features.jsx';

import Price from './price/price.jsx';

const App = () => {
  return <div className="app">
    <header className="nav">
      <Container content={<Navbar/>}/>
    </header>
    <main className="first">
      <Container content={<Hero/>}/>
      <Container content={<Stats/>}/>
      <Container content={<Features/>}/>
    </main>
    <section className="second">
      <Container content={<Price/>}/>
    </section>
  </div>
};

export default App;