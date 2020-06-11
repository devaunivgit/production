import React from 'react';

export interface NumberFunctionalProps {
  title?: string
  handleChangeTitle: () => void
}
 

const NumberFunctional: React.SFC<NumberFunctionalProps> = (props) => {
  return ( <>
  <div>NumberFunctional : {props.title}!!!</div>
  <button onClick={props.handleChangeTitle}>ChangeTitle</button>
  </> );
}

NumberFunctional.defaultProps = {
  title :'welcome'
}

export default NumberFunctional;
