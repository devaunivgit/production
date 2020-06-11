import React from 'react';
import './App.css';

export interface FunctionalRefsProps {
  
}
 
const FunctionalRefs: React.SFC<FunctionalRefsProps> = () => {
  let inputRef:any = null;
  const fnClick = () => {
    inputRef.focus();
  }
  return ( 
  <>
  <input ref={(input) => {inputRef = input}} type='text' /> 
  <input onClick={fnClick} type='submit' value='submit' /> 
  </>
  );
}
 
export interface RefsProps {}

export interface RefsState {
  loggedIn: boolean;
}

class Refs extends React.Component<RefsProps, RefsState> {
  state = {
    loggedIn: false,
  };
  firstname: any;
  lastname: any;
  age: any;
  submit: any;
  constructor(props: RefsProps) {
    super(props);
    console.log('constructor');
  }
  handleSubmit = () => {
    console.log('this.firstname', this.firstname.value);
    console.log('this.lastname', this.lastname.value);
    console.log('this.age', this.age.value);
    this.firstname.focus();
  };
  onkeyup = (target: string, e: any) => {
    console.log('e.keyCode', e.keyCode)
    if (e.keyCode === 13) {
      switch (target) {
        case 'firstname':
          this.lastname.focus();
          break;
        case 'lastname':
          this.age.focus();
          break;
        case 'age':
          this.submit.focus();
          break;
        default:
          this.firstname.focus();
          break;
      }
    }
  };
  render() {
    return (
      <>
        <div><FunctionalRefs /></div>
        <div>
          first name :{' '}
          <input
            ref={(input) => {
              this.firstname = input;
            }}
            type='text'
            name='firstname'
            onKeyUp={this.onkeyup.bind(this, 'firstname')}
          />
        </div>
        <div>
          last name :{' '}
          <input
            ref={(input) => (this.lastname = input)}
            type='text'
            name='lastname'
            onKeyUp={this.onkeyup.bind(this, 'lastname')}
          />
        </div>
        <div>
          age :{' '}
          <input
            ref={(input) => (this.age = input)}
            type='text'
            name='age'
            onKeyUp={this.onkeyup.bind(this, 'age')}
          />
        </div>
        <div>
          <button
            ref={(input) => (this.submit = input)}
            onClick={this.handleSubmit.bind(this)}
          >
            Submit
          </button>
        </div>
      </>
    );
  }
}

export default Refs;
