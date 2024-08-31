'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { addToCart, decerment, deleteFromCart, incerment } from "../lib/features/counter/counterSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const CartBody = () => {

    const cartItems = useAppSelector(state => state.counter.cart)
    let newCartItems = cartItems?.filter(item => {
        item != null
        return item
    })
    let cLength = newCartItems?.length
    const subtotal = cartItems?.reduce((total, item) => total + item.price * item.quantity, 0);


    const dispatch = useAppDispatch()
    const handleRemove = (id) => {
        toast('Removed !  🛒', {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        });
        dispatch(deleteFromCart(id))
    }
    const handleIncrement = (item) => {
        // toast('Removed !  🛒', {
        //     position: "bottom-right",
        //     autoClose: 5000,
        //     hideProgressBar: false,
        //     closeOnClick: true,
        //     pauseOnHover: true,
        //     draggable: true,
        //     progress: undefined,
        //     theme: "dark",
        // });
        dispatch(incerment(item))
    }
    const handleDecrement = (item) => {
        if(item.quantity>1){
            dispatch(decerment(item))
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
            <div className="p-4 my-8 max-w-3xl mx-auto bg-gray-900 text-white">
                <table className="w-full table-auto border-collapse">
                    <thead>
                        <tr className="text-left">
                            <th className="p-2 border-b-2 border-gray-700">Product</th>
                            <th className="p-2 border-b-2 border-gray-700">Price</th>
                            <th className="p-2 border-b-2 border-gray-700">Quantity</th>
                            <th className="p-2 border-b-2 border-gray-700">Subtotal</th>
                            <th className="p-2 border-b-2 border-gray-700"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {newCartItems.length<1?<tr><td className='text-red-500 py-3'>Add something</td></tr>:''}
                        {newCartItems && newCartItems.map((item) => (
                            <tr key={item.id} className="text-start">
                                <td className="p-2 border-b border-gray-700 flex items-center space-x-4">
                                    <img src={item.image} alt={item.name} className="rounded-sm w-16 h-16" />
                                    <span className="text-red-400 underline">{item.name}</span>
                                </td>
                                <td className="p-2 border-b border-gray-700">₹{item?.price?.toFixed(2)}</td>
                                <td className="p-2 border-b border-gray-700">
                                    <div>
                                        <button className="rounded-md bg-gray-100 px-2 py-1 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30" onClick={() => { handleDecrement(item) }}>
                                            -
                                        </button>
                                        <span className="mx-2">{item.quantity}</span>
                                        <button className="rounded-md bg-gray-100 px-2 py-1 text-base font-medium text-navy-700 transition duration-200 hover:bg-gray-200 active:bg-gray-300 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/30" onClick={() => { handleIncrement(item) }} >
                                            +
                                        </button>
                                    </div>

                                    {/* <input type="number" onChange={() => { }} value={item.quantity} min="1" className="w-12 p-1 text-center bg-gray-800 text-white" /> */}
                                </td>
                                <td className="p-2 border-b border-gray-700">₹{(item.price * item.quantity).toFixed(2)}</td>
                                <td className="p-2 border-b border-gray-700">
                                    <button onClick={() => { handleRemove(item.id) }}>
                                        <img src="/delete.svg" className='cursor-pointer w-8' alt="" />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <div className="flex justify-between items-center my-4">
                    <div className="flex space-x-2">
                        <input type="text" placeholder="Coupon code" className="p-2 bg-gray-800 text-white w-40" />
                        <button className="p-2 bg-gray-700 text-white">Apply Coupon</button>
                    </div>
                    <button className="p-2 bg-gray-700 text-white">Update Cart</button>
                </div>

                <div className="mt-8">
                    <h2 className="text-lg font-bold">Cart totals</h2>
                    <div className="flex justify-between mt-4">
                        <span>Subtotal</span>
                        <span>₹{subtotal && subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mt-2">
                        <span>Total</span>
                        <span>₹{subtotal && subtotal.toFixed(2)}</span>
                    </div>
                    <button className="w-full rounded-md mt-4 p-3 bg-green-500 hover:bg-green-600 text-white">Proceed To Checkout</button>
                </div>
            </div>
        </>
    )
}

export default CartBody