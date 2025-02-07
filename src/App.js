//import logo from './logo.svg';
//import React from 'react';
import './App.css';
//import User from './User';
import React, { Component } from 'react';
function App(){
  return(
    <div className="App">
      <h1>Hello World</h1>
      <User/>
      
      
    </div>
  );
}

class User extends Component
{
  render()
  {
    return(
      <h1>Class component in Single Component </h1>
    )
  }
}

export default App;