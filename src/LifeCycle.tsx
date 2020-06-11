import React from 'react';
import './App.css';
import ChildComponent from './child';

export interface LifeCycleProps {}

export interface LifeCycleState {}

class LifeCycle extends React.Component<LifeCycleProps, LifeCycleState> {
  state = { name: 'abc' };
  constructor(props: LifeCycleProps) {
    super(props);
    this.state = {
      name: 'deva',
    };
    console.log('constructor');
  }
  changeState() {
    this.setState({name:'hello'});
  }
  componentWillMount(){
    console.log('componentwillmount');
  }
  componentWillReceiveProps(){
    console.log('componentwillreceiveprops');
  }
  shouldComponentUpdate(nextProps: any, nextState: any){
    console.log('shouldComponentUpdate');
    return true;
  }
  componentDidMount() {
    console.log('component did mount');
  }
  
  componentWillUpdate() {
    console.log('componentwill update');
  }
  componentDidUpdate() {
    console.log('component did update');
  }
  componentWillUnmount() {
    console.log('component will un mount');
  }
  unmountChild (){
    this.setState({ name:'abc'});
  }
  render() {
    console.log('render');
    if(this.state.name === 'abc') {
      return (<div />)
    }
    return (
      <>
        <div>LifeCycle </div>
        <button onClick={this.changeState.bind(this)}>Changes State</button>
        <span>{this.state.name} </span>
        <ChildComponent title={this.state.name} />
        <button onClick={this.unmountChild.bind(this)}>UnMount Child</button>
      </>
    );
  }
}

export default LifeCycle;
