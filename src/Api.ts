export function fetchUserData() {
  let namePromise = fetchName();
  let addressPromise = fetchAddress();
  return {
    name : wrapPromise(namePromise),
    address : wrapPromise(addressPromise)
  }
}

function fetchName(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Devanadhen');
    })
  })
}

function fetchAddress(){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Pondicherry');
    })
  })
}

function wrapPromise(promise: any) {
  let status = 'pending';
  let result:any;
  let suspender = promise.then(
    (r:any) => {
      status = 'success';
      result = r;
    }, (e:any) => {
      status = 'error';
      result = e;
    }
  )
  return {
    read() {
      if(status === 'pending'){
        throw suspender;
      } else if(status === 'success'){
        return result;
      } else if(status === 'error'){
        return result;
      }
    }
  }
}