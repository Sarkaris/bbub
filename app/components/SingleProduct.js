'use client'
import { useEffect, useState } from "react";
import Header from "./Header";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { addToCart } from "../lib/features/counter/counterSlice";
import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';
import AddCart from "./AddCart";

const SingleProduct = ({ id }) => {

    const dispatch = useAppDispatch()
    const itemsNo = useAppSelector(state => state.counter.cart)
    const [sproduct, setSproduct] = useState({})
    const [loading, setLoading] = useState(false)
    const findProduct = async () => {
        const response = await fetch(`/api/singleProductFind/?id=${id}`)
        const data = await response.json()
        setSproduct(data.Product[0])
    }
    useEffect(() => {
        setLoading(true)
        findProduct()
        setLoading(false)
    }, [])


    return (
        <>
            <Header />
            <div className="bg-black text-white  px-4 w-[80%] mx-auto my-auto">
                {/* {!loading ? "" : <img src="/loading.gif" alt="loading..." />} */}
                <div className="container mx-auto flex gap-8 items-center">
                    {/* Left Item */}
                    <div className="bg-black p-4 flex flex-col items-center w-[40%] text-center">
                        <p className="uppercase text-sm tracking-widest text-gray-400 mb-2">Special</p>
                        <h2 className="text-4xl font-bold mb-6">Refine Your Style</h2>
                        <div className="bg-gray-900 p-4 rounded-md">
                            {!sproduct.image ? <img src={"/loading.gif"} width={300} height={300} className="rounded-md hover:cursor-zoom-in" alt="image" /> : <img src={sproduct.image} width={300} height={300} className="rounded-md hover:cursor-zoom-in" alt="image" />
                            }
                            {/* <image src="{sproduct.image}" alt="Makeup Collection" className="mb-4" /> */}
                            <p className="uppercase text-sm text-gray-400 my-2">Accessories</p>
                            <h3 className="text-2xl font-semibold">{sproduct.category}</h3>
                            <p className="text-xl mt-2">₹{sproduct.price}</p>
                        </div>
                    </div>

                    {/* Right Item */}
                    <div className="relative bg-cover bg-center p-8 w-[50%] " >
                        {/* <div className="relative bg-cover bg-center p-8" style={{ backgroundImage: 'url(/path/to/image2.jpg)' }}> */}
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center p-6">
                            <p className="uppercase text-sm text-gray-400 mb-2">Clothing</p>
                            <h3 className="text-3xl md:text-4xl font-bold mb-4">{sproduct.title}</h3>
                            <p className="text-xl mb-4">₹{sproduct.price}</p>
                            <p className="text-sm text-gray-400">{sproduct.rating}/5</p>
                            {/* <p className="text-sm text-gray-400">Skin & Eye Primer<br />A Foundation & Concealer Palette</p> */}
                            <span className="w-full flex">
                                <button type="button" className="w-[40%] text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm  text-center me-2 mt-6 px-6 py-2.5 ">Buy Now</button>
                                <AddCart sproduct={sproduct} />
                            </span>
                            <p className="text-sm text-gray-400 mt-16"><span className="text-base">Product Details </span><br />{sproduct.description}</p>
                            {/* <button className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-bold">Shop Now</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleProduct