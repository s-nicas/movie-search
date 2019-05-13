import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.css';
import Home from './Home'

const App = () => {
    return(
      <Router>
        <div>
          <Route exact path="/" component={Home}/>     
        </div>
      </Router>
    );
}
   
    
      
  

  

export default App;
