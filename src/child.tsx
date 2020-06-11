import React from 'react';
export interface ChildComponentProps { title  :string}

export interface ChildComponentState {}

class ChildComponent extends React.Component<
  ChildComponentProps,
  ChildComponentState
> {
  constructor(props : ChildComponentProps) {
    super(props);
    console.log('child constructor');
    
  }

  shouldComponentUpdate(nextProps: any, nextState: any){
    console.log('child shouldComponentUpdate');
    return true;
  }
  componentWillUpdate() {
    console.log('child componentwill update');
  }
  componentDidUpdate() {
    console.log('child component did update');
  }
  componentWillUnmount() {
    console.log('child component will un mount');
  }

  componentWillMount() {
    console.log('child componentwillmount');
  }
  componentWillReceiveProps() {
    console.log('child componentwillreceiveprops');
  }
  componentDidMount() {
    console.log('child component did mount');
  }
  render() {
    console.log('child render');
  return <div>Child {this.props.title}</div>;
  }
}

export default ChildComponent;
