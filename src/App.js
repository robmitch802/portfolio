import React from 'react';
import { Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar.component.js';
import Header from './components/header.component.js'
import Work from './components/work.component.js'
import Interests from './components/interests.component.js'
import Projects from './components/projects.component.js'
import About from './components/about.component.js'

function App() {
  return (

    <Router>
      <div className="container" >
      <NavBar />
      <Header />
      <br/>
      <Route path="/" exact component={About} />
      <Route path="/work" exact component={Work} />
      <Route path="/projects" exact component={Projects} />
      <Route path="/interests" exact component={Interests} />
      </div>
    </Router>

  )}
    

export default App;
