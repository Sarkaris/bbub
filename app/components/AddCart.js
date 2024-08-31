'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { addToCart } from "../lib/features/counter/counterSlice";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const AddCart = ({sproduct}) => {
    const dispatch = useAppDispatch()
    const handleAddToCart = (item) => {
        toast('Added to Cart!  🛒', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        if(typeof item == 'object'){
            dispatch(addToCart(item))
        }
    }


    return (
        <>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <ToastContainer />
            
            <button type="button" className={`w-[40%] text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm  text-center me-2 mt-6 px-6 py-2.5`} onClick={() => handleAddToCart(sproduct)}>Add to Card</button>
        </>
    )
}

export default AddCart