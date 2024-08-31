import React from 'react';
import Header from '../components/Header';
// import CartBody from '../components/CartBody';
import dynamic from 'next/dynamic';



const cart = () => {

// very Important vvip
const CartBody = dynamic(()=> import('../components/CartBody'),{
  loading: () => <div className=''><img src="/loading.gif" className='w-[10%] mx-auto my-16' alt="Loading..." /></div>,
  ssr:false,
})


  return (
    <>
      <Header />
      <CartBody/>
    </>
  )


}

export default cart;
