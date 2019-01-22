import React, { Component } from 'react';
import './App.css'

class App extends Component{
  render() {
    
    this.State= {
      title: "Garzon Web",
      main: 'Home',
      about: 'About me',
      contact: 'Contact',
      work: 'Portfolio',
      link: 'www.youtube.com'
    }

    return (
     <div>  
       <div>
        <ul>
          <ul>{this.State.main}</ul>
          <ul>{this.State.about}</ul>
          <ul>{this.State.contact}</ul>
          <ul>{this.State.work}</ul>
        </ul>
       </div>
       <h1>{this.State.title}</h1>
     </div>
    
    );
  }
}

export default App;
