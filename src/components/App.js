import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { onIncrement } from "../actions/index";

const App = props => (
  <div className="counter">
    <span>{props.counter}</span>
    <button onClick={() => props.onIncrement(props)}>+1</button>
  </div>
);

const mapStateToProps = (state, props) => ({
  counter: state.incrementor.counters[props.counterKey]
});

const matchDispatchToProps = (dispatch, props) =>
  bindActionCreators({ onIncrement: onIncrement }, dispatch);

export default connect(mapStateToProps, matchDispatchToProps)(App);
