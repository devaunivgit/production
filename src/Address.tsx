import React, { useState, useEffect } from 'react';

export interface AddressProps {}

const Address: React.SFC<AddressProps> = () => {
  const [address, setName] = useState('Unknown');
  
  useEffect(() => {
    console.log('init');
     const getName = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('pondichery');
      }, 5000);
    })
    getName.then((result:any) => {
      setName(result)
    })
  }, [])
  return (
    <>
      <div>{address}</div>
     </>
  );
};

export default Address;
