import React, { Component } from 'react';
import './app.css'

class App extends Component{
  render() {
    
    this.State= {
      title: "Garzon Web",
      
    }

    return (
     <div>  
       <h1>{this.State.title}</h1>
     </div>
    
    );
  }
}

export default App;
