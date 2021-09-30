import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './App.css'

import Navbar   from './components/Navbar';
import Sidebar  from './components/Sidebar';
import Home     from './components/Home';
import Menu     from './components/Products/Menu';
import Footer   from './components/Footer';

import { pizzaMenu, salatMenu, drinksMenu } from './components/Products/menu-data';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [languageState, setLanguage] = useState('it');

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
  }, [languageState]);

  return (
    <Router>
      <Navbar   toggle={toggle} />
      <Sidebar  isOpen={isOpen} toggle={toggle} setLanguage={setLanguage}/>
      <Home />
      <Menu id="pizza-menu" title="Pizzas" data={ pizzaMenu } language={languageState}/>
      <Menu id="salat-menu" title="Salat"  data={ salatMenu } language={languageState}/>
      <Menu id="drinks-menu" title="Getränke" data={ drinksMenu }/>
      <Footer id="footer"/>
    </Router>
  );
}

