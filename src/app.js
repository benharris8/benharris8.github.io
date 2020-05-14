import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import 'bulma';
import '../style/main.scss';
import '../node_modules/react-image-gallery/styles/scss/image-gallery.scss';

import Home from './components/Home';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Skills from './components/Skills'
import Experience from './components/Experience'

const App = () => (
  <>
    <Home />
    <About />
    <Projects />
    <Skills />
    <Experience />
    <Contact />
  </>
)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);