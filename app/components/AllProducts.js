"use client"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'
import AddCart from "./AddCart"
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { addToCart } from "../lib/features/counter/counterSlice";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const AllProducts = () => {
    // loading
    const [loading, setLoading] = useState(true)
    const dispatch = useAppDispatch()
    const router = useRouter()
    const [products, setProducts] = useState([])
    const fetchAllProductDataSupabase = async () => {
        const response = await fetch('http://localhost:3000/api/supabase')
        if (response) {
            const data = await response.json()
            let arrData = data.Products
            setProducts(arrData)

        }
    }
    const handleClick = (item) => {
        // Set the context value on button click
    };
    useEffect(() => {
        fetchAllProductDataSupabase()
        setLoading(false)
    }, [])

    const handleAddToCart = (item,e) => {
        e.stopPropagation()

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
        if (typeof item == 'object') {
            console.log(item);
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
            <div className="flex justify-center gap-4">
                <span className="w-16 border border-white h-0 top-4 relative"></span>
                <h1 className="text-3xl font-bold text-center mb-8">Premium Products</h1>
                <span className="w-16 border border-white h-0 top-4 relative"></span>
            </div>
            {loading && <div><img src="/loading.gif" className="mx-auto size-20" alt="Loading" /></div>}
            <div className="mx-auto flex flex-row flex-wrap gap-10 justify-center px-10">

                {/* console.log(products); */}
                {/* console.log(products.length); */}
                {products.map((item) => (
                    <div key={item.id} onClick={(e => {
                        // handleClick(item)
                        router.push(`http://localhost:3000/product/${item.id}`)
                    })} className="cursor-pointer relative rounded-md overflow-hidden min-w-[30%] max-w-[30%]">
                        {/* <h1>{item.price}</h1> */}
                        <img src={item.image} alt={item.title} className="w-full h-96 object-cover hover:object-top duration-200 " />
                        <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 p-4 w-full">
                            <h4 className="font-bold">{item.title}</h4>
                            <div className="flex max-h-[58px] items-baseline justify-around">
                                <p className="text-gray-400">₹{item.price}</p>
                                <button type="button" className={`w-[22%] text-white bg-gradient-to-br from-red-500 to-red-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-xs  text-center me-2 mt-0 px-0 py-1`} onClick={(e) => handleAddToCart(item,e)}>Add to Card</button>
                            </div>
                            {item.sale && <span className="absolute top-0 right-0 bg-red-600 text-white px-2 py-1 text-sm">Sale</span>}
                        </div>
                    </div>
                ))}
            </div>
        </>

    )
}

export default AllProducts