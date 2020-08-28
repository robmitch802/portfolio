import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navbar.component.js';
import Header from './components/header.component.js'
import Work from './components/work.component.js'
import Interests from './components/interests.component.js'
import Projects from './components/projects.component.js'
import About from './components/about.component.js'
import Admin from './components/admin.component.js'

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
      <Route path="/admin" exact component={Admin} />
      </div>
    </Router>

  )}
    

export default App;
