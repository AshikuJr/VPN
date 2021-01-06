import React from 'react';
import '../styles.sass';

import Container from './container/container.jsx';

import Navbar from './navbar/navbar.jsx';
import Hero from './hero/hero.jsx';
import Stats from './stats/stats.jsx';
import Features from './features/features.jsx';

import Price from './price/price.jsx';
import Network from './network/network.jsx';
import Testimonials from './testimonials/testimonials.jsx';

import Subscribe from './subscribe/subscribe.jsx';
import Footer from './footer/footer.jsx';

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
      <Container content={<Network/>}/>
      <Container content={<Testimonials/>}/>
      <Container content={<Subscribe/>}/>
    </section>
    <section className="third">
      <Container content={<Footer/>}/>
    </section>
  </div>
};

export default App;