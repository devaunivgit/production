import React from 'react';

export interface NumberComponentProps {
  name :string
  age? :number
  children?: any
}
 
export interface NumberComponentState {
  value:number
}
export default class NumberComponent extends React.Component<NumberComponentProps, NumberComponentState> {
  state = { value:0  }
  static defaultProps = {
    age: 0,
    name : ''
    
  }
  render() {
    const {value} = this.state; 
    const {name, age, children} = this.props; 
    return ( 
      <>
      <h1>{name}</h1>
      <h4>{age}</h4>
      <div>{value} ; children : {children}</div>
      <button onClick={()=>this.setState({value: value+1})}>Increment</button>
      </>
     );
  }
}
