import React from "react";
import { connect } from "react-redux";
import CounterContainer from './CounterContainer'

export default class App extends React.Component {
  render() { 
      return (
         <CounterContainer/>
      ); 
  } 
}

