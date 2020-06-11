import React, { useState, useEffect } from 'react';
import './App.css';
// import Address from './Address';
import Redux from './Redux';
// import { fetchUserData } from './Api';

// const resources = fetchUserData();
// export interface AppProps {}

// const App: React.SFC<AppProps> = () => {
//   const [name, setName] = useState('Unknown');

//   useEffect(() => {
//     console.log('init');
//     const getName = new Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve('Devanadhen');
//       }, 5000);
//     });
//     getName.then((result: any) => {
//       setName(result);
//     });
//   }, []);
//   return (
//     <>
//       <div>{name}</div>
//       <Address></Address>
//     </>
//   );
// };

// export default App;
export interface AppProps {}

export interface AppState {
  data: {
    completed: boolean;
    id: number;
    title: string;
    userId: number;
  };
}

class App extends React.Component<AppProps, AppState> {
  state = { data: { completed: false, id: 0, title: '', userId: 0 } };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
  }
  render() {
    console.log(this.state.data);

    return (
      <div>
        {/* Id : {this.state.data.id}
        user id ; {this.state.data.userId}
        title : {this.state.data.title}
        completed : {this.state.data.completed ? 'Active' : 'Un-active'} */}
      <Redux />
      </div>
      
    );
  }
}

export default App;
