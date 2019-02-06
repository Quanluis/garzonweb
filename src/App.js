import React, { Component } from 'react';
import './App.css'
import Gear from './gear.svg'

class App extends Component{

  click = (e) =>  {
    e.preventDefault()
    console.log('This is: ', this.State.main)
  }

  render() {
    
    this.State= {
      title: "Garzon Web",
      main: 'Home',
      about: 'About',
      github: 'Github',
      work: 'Portfolio',
      link: 'www.youtube.com'
    }

    return (


     
     <div>  
       <div className = 'nav' >
        <ul>
          <ul><a onClick = {this.changeOnHover} target = "_blank"  href = { 'https://github.com/Quanluis' } >  {this.State.main}</a></ul>
          <ul><a href="">{this.State.about}</a></ul>
          <ul><a href="">{this.State.github}</a></ul>
          <ul><a href="">{this.State.work}</a></ul>
        </ul>
       </div>
       <h1>{this.State.title}</h1>
       <img src={Gear} alt=""/>
     </div>
    
    );
  }
}

export default App;
