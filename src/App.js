import React, { Component } from 'react';
import Navbar from './Navbar';
import Main from './Main';
import Stateless from './Stateless';
import './App.css';


class App extends Component{

  render() {

    return (

     <div>  
    <Navbar />
    <Main />
    <Stateless />
     </div>
    
    );
  }
}

export default App;
