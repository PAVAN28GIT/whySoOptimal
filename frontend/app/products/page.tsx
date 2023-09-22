'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { fetchProducts } from '../utils/productFunctions'
import { ProductDetails } from '../utils/constants'
import Link from 'next/link'

const Products = () => {

    const [products, setProducts] = useState<ProductDetails[]>([]);


    useEffect(() => {
        fetchProducts(setProducts)
    }, [])

    useEffect(() => {
        console.log(products)
    }, [products])

    return (
        <div className="products px-40 pt-20 pb-20 min-h-screen bg-slate-400">
            <h1 className='text-8xl font-extrabold pb-10'>Products</h1>
            {products.map((product, index) => {
                return (
                    <>
                        <div key={index} className="semester bg-[#D7D9DD] shadow-2xl shadow-black p-5 rounded-2xl mb-6 mx-2 lg:mx-5 flex justify-center w-full ">
                            <Link className='w-1/4 lg:w-1/2 flex items-center justify-center mr-4' target='_blank' href={`${product.images[0]}`}>
                                <Image title='Click to view' className='cursor-pointer rounded-xl w-full mb-3 hover:scale-105 transition-all duration-300' src={`${product.images[0]}`} width={300} height={300} alt='subjectFolder' />
                            </Link>
                            <div className="details w-3/4 ml-2 lg:w-full flex flex-col justify-center">
                                <div className="updateDetails flex-col space-y-4 text-xs flex my-1 ">
                                    <p className='text-2xl font-bold'>{product.title}</p>
                                    <p className='text-2xl font-bold'>{product.description}</p>
                                    <p className='text-2xl font-bold'>{product.ratings}</p>
                                    <p className='text-2xl font-bold'>{product.price}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })}
        </div>
    )
}

export default Products
