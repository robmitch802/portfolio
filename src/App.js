import React from 'react';
import { BrowswerRouter as Router, Route } from 'react-router-dom';
import 'react-boostrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/navbar.component.js';
import './components/header.component.js'


function App() {
  return (

    <Router>
      <div className="container" >
      <Navbar />
      <Header />
      <br/>
      <Route path="/" exact component={About} />
      <Route path="/" exact component={Work} />
      <Route path="/" exact component={Projects} />
      <Route path="/" exact component={Interests} />
      </div>
    </Router>

  )}
    

export default App;
