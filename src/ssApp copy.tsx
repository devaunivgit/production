import React, { SyntheticEvent, useState } from 'react';
import NumberFunctional from './NumberFunctional';
import NumberComponent from './NumberComponent';
import './App.css';
import User from './User';

function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Devanadhen');
  const [users, setUsers] = useState([
    { id: 1, name: 'dev', age: 20 },
    { id: 2, name: 'aaaa', age: 10 },
    { id: 3, name: 'dddd', age: 30 },
  ]);
  function clickHandler(e: SyntheticEvent) {
    setCount(count + 1);
  }
  function handleYounger() {
    const newUsers = users.map((user) => {
      const tempUser = user;
      tempUser.age -= tempUser.age >= 0 ? tempUser.age - 10 : tempUser.age;
      return tempUser;
    });
    setUsers(newUsers);
  }
  const inputChangeHandle = (e: any) => {
    console.log(e.target.value);
    setName(e.target.value);
  };
  const changeName = (changename: string = 'asdfasdsad') => {
    console.log(changename);
    setName(changename);
  };
  const handleChange = (currentUser: any, e:any) => {
    const index = users.findIndex((user) =>  user === currentUser);
    const tempUser = Object.assign({}, users[index]);
    tempUser.name = e.target.value;
    const tempUsers:any = Object.assign([], users);
    tempUsers[index] = tempUser;
    setUsers(tempUsers);
  };
  const handleDelete = (currentUser: any) => {
    console.log(currentUser);
    const newUsers = users.filter((user) =>  user !== currentUser);
    setUsers(newUsers);
  };
  return (
    <div className='App'>
      <div id={'test'}>Hello React {count}</div>
      <button onClick={() => setCount(count + 1)}>Click me - inline fn</button>
      <button onClick={clickHandler}>Click me - function defined</button>
      <button onClick={handleYounger}>Make younger</button>
      <button onClick={() => changeName('qqqq')}>
        Click to change name using bind
      </button>
      Name :{name}
      <input
        type='text'
        name='firstname'
        value={name}
        onChange={(event) => inputChangeHandle(event)}
      />
      {users.map((user, index) => (
        <User
          key={index}
          age={user.age}
          name={user.name}
          onChange={(event) => handleChange(user, event)}
          onDelete={() => handleDelete(user)}
        />
      ))}
      <NumberFunctional
        title={name}
        handleChangeTitle={() => changeName('deva')}
      />
      {/* <NumberFunctional /> */}
      <NumberComponent name='Deva' age={35} />
      <NumberComponent name='ABCD' />
      <NumberComponent name={'XYZ'} />
      <NumberComponent name={'LKJ'} />
      <NumberComponent>Placeholder</NumberComponent>
    </div>
  );
}
export default App;
