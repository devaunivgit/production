import React from 'react';
import './App.css';

type Props = {
  val: number;
};
const Temp = (props: Props) => {
  console.log('render child');
  return <div>{props.val}</div>;
};

export interface PureComponentProps {}

export interface PureComponentState {}

class PureComponent extends React.PureComponent<PureComponentProps, PureComponentState> {
  state = {
    value: 1,
  };
  constructor(props: PureComponentProps) {
    super(props);
    console.log('constructor');
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({ value : 1 });
    }, 2000);
  }
  // shouldComponentUpdate(nextProps :any, nextState:any){
  //   console.log('this.state', this.state)
  //   console.log('nextState', nextState)
  //   return (this.state.value === nextState.value ? false : true);
  // }
  render() {
    console.log('render');
    return (
      <>
        <div>PureComponent </div>
        <Temp val={this.state.value} />
      </>
    );
  }
}

export default PureComponent;
