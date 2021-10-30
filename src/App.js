import './App.css';

import React, { Component } from 'react'

import { doc, setDoc } from "firebase/firestore"; 
import { fs } from '../src/Firebase'

export default class App extends Component {

  constructor () {
    super()
    this.state = { }
  }


  componentDidMount(){
    
  }

  createDoc(){
    setDoc(doc(fs, "test", "TE"), {
      name: "Los Angeles",
      state: "CA",
      country: "USA"
    });
  }

  render() {
    return (
      <div>
        hello world

        <button onClick={ this.createDoc()}>Create new </button>
      </div>
    )
  }
}
