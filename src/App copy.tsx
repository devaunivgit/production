import React from 'react';
import './App.css';

export interface AppProps {}

export interface AppState {
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    console.log('constructor');
  }
  render() {
    return <>
    <div>App</div>
    </>;
  }
}

export default App;
