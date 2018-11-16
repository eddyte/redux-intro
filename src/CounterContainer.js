import React from 'react';
import { connect } from "react-redux";

const mapStateToProps = state => ({
    counter: state
  });
  
  const mapDispatchToProps = dispatch => ({
    increaseCounter: () => dispatch({ type: "INCREMENT" }),
    decreaseCounter: () => dispatch({ type: "DECREMENT" })
  });


const CounterContainer = (props) => (
  <div>
    <h1>Current Counter: {props.counter}</h1>
    <button onClick={e => props.decreaseCounter()}>-</button>
    <button onClick={e => props.increaseCounter()}>+</button>
  </div>
)

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(CounterContainer);


