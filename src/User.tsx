import React from 'react';

export interface UserProps {
  name: string;
  age: number;
  onDelete: () => void;
  onChange: (event: any) => void;
}

export interface UserState {}

class User extends React.Component<UserProps, UserState> {
  render() {
    const { name, age } = this.props;
    return (
      <>
        <div>
          Name : {name} Age : {age}
          <input onChange={(event) => this.props.onChange(event)} value={name} />
          <button onClick={this.props.onDelete}>Delete</button>
        </div>
      </>
    );
  }
}

export default User;
