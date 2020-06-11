export const AsyncAgeUp = (val) => {
  return {type :'AGE_UP', value : val}
}
export const loading = () => {
  return {type :'LOADING'}
}
export const ageUp = (val) => {
  return dispach => {
    dispach(loading())
    setTimeout(() => {
      dispach(AsyncAgeUp(val))
    }, 4000);
  }
}
export const ageDown = (val) => {
  return {type :'AGE_DOWN', value : val}
}