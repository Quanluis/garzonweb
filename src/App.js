import React, { Component } from 'react';
import './App.css'

class App extends Component{

  click = (e) =>  {
    e.preventDefault()
    console.log('This is: ', this.State.main)
  }

  onHover = () => {
    
  }
  

  render() {
    
    this.State= {
      title: "Garzon Web",
      main: 'Home',
      about: 'About',
      contact: 'Contact',
      work: 'Portfolio',
      link: 'www.youtube.com'
    }

    return (


     
     <div>  
       <div>
        <ul>
          <ul><a onClick = {this.click} href="">{this.State.main}</a></ul>
          <ul><a href="">{this.State.about}</a></ul>
          <ul><a href="">{this.State.contact}</a></ul>
          <ul><a href="">{this.State.work}</a></ul>
        </ul>
       </div>
       <h1>{this.State.title}</h1>
     </div>
    
    );
  }
}

export default App;
