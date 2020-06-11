import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import * as actionCreator from './store/actionCreator';
export interface ReduxProps {
  age: number;
  loading: boolean;
  onAgeUp: (id: number) => void;
  onAgeDown: () => void;
}

export interface ReduxState {}

class Redux extends React.Component<ReduxProps, ReduxState> {
  constructor(props: ReduxProps) {
    super(props);
    console.log('constructor');
  }
  render() {
    return (
      <>
        <div>{this.props.age}</div>
        <button onClick={() => this.props.onAgeUp(2)}>Increment</button>
        <button onClick={this.props.onAgeDown}>Decrement</button>
        {this.props.loading && 'Loading....'}
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  console.log('state ', state);

  return {
    age: state.age,
    loading: state.loading,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onAgeUp: (value:number) => dispatch(actionCreator.ageUp(value)),
    onAgeDown: () => dispatch(actionCreator.ageDown(1)),
    // onAgeUp: () => dispatch({ type: 'AGE_UP' }),
    // onAgeDown: () => dispatch({ type: 'AGE_DOWN' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Redux);
