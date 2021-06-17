
import './App.css';
import Hearder from './componete/Heard/Hearder.jsx';
import Footer from './componete/Footer/Footer';
import Card from './componete/Card';
import React, {Component } from 'react';

class App extends Component{
  render(){
    return (
      <div>
        <Hearder/>
        <Card/>
        <Footer/>
      </div>
    );
  }  
}

export default App;
