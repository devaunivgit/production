const initialState = {
  age: 21,
  loading: false
};

const reducers = (state = initialState, action) => {
  const newState = { ...state };
  // if(action.type === 'ASYNC_AGE_UP') {
  //     newState.age++;
  // }
  if (action.type === 'AGE_UP') {
    return {
      ...state,
      age: state.age + action.value,
      loading: false
    };
    // newState.age++;
    // newState.loading = false;
  }
  if (action.type === 'AGE_DOWN') {
    newState.age--;
  }
  if (action.type === 'LOADING') {
    newState.loading = true;
  }
  return newState;
};

export default reducers;
