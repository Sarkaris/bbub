'use client'
import { useState,useEffect } from 'react';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useAppSelector } from '../lib/hooks';
const Header = () => {
  const [itemsNo, setitemsNo] = useState(0)
  let itemsNo1 = useAppSelector(state => state.counter.cart)
  useEffect(() => {
    setitemsNo(itemsNo1)
    
  }, [itemsNo1])
  
  return (
    <header className="bg-black text-white py-4 px-12 ">
      <div className="container flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link href="/">
            My Jarvo
          </Link>
        </h1>
        <nav className="space-x-4 flex gap-2">
          <Link href="/" className="hover:text-gray-400">Home</Link>
          <Link href="/contact" className="hover:text-gray-400">Contact</Link>
          <Link href="/cart" className="flex relative">
            <Image src={"/cart.svg"} width={0} height={0} className='w-5 h-auto'  alt='cart' />
            {/* <span className=' bg-red-600 h-2.5 w-2.5 text-center text-[12px] rounded-lg'></span> */}
            <span className=' bg-red-600 h-4 w-3 text-center text-[12px] rounded-lg'>{itemsNo?.length}</span>
          </Link>
          <Link href="/"><Image src={"/profile.svg"} width={0} height={0} className='w-5 h-auto' alt='profile' /></Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
