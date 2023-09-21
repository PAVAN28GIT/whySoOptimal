import { productFields } from '@/app/utils/constants'
import Image from 'next/image'
import React from 'react'

const Upload = () => {
    return (
        <>
            <div className={`min-h-screen relative pt-20 md:pt-24 pb-10 xl:pt-16 xl:pb-0 w-full flex items-center justify-center bg-cover bg-center bg-[url("https://greenfoundationnepal.com/wp-content/uploads/2015/05/RUM06696-1.jpg")]`}>
                <div className='absolute h-full inset-0 bg-gradient-to-l from-transparent via-opacity-50 to-black'></div>
                <div className="uploadContent relative z-20 w-full lg:mx-40 flex items-center justify-center space-x-8">
                    <div className='uploadForm w-full bg-[rgba(255,255,255,0.1)] text-white flex flex-col lg:flex-row space-y-8 lg:space-y-0 rounded-xl p-4 md:p-8 backdrop-blur-2xl shadow-2xl border-[rgba(255,255,255,0.1)]'>
                        <div className="images flex items-center lg:order-2 lg:ml-8 lg:w-1/2  rounded-xl">
                            <Image className='w-full p-10 bg-[rgba(255,255,255,0.1)] backdrop-blur-2xl rounded-xl' src="/images/upload.svg" alt="upload" width={100} height={100} />
                        </div>
                        <div className='uploadForm lg:order-1 lg:w-1/2 bg-[rgba(255,255,255,0.1)] text-white flex flex-col rounded-xl space-y-8 p-8 backdrop-blur-2xl shadow-2xl border-[rgba(255,255,255,0.1)]'>
                            <h1 className='font-bold text-6xl'>Upload Product</h1>
                            {
                                productFields.map((field, index) => {
                                    return (
                                        < input key={index} className='outline-none placeholder:text-white bg-transparent border-b p-2 border-[rgba(255,255,255,0.5)]' type={field.type} placeholder={field.placeholder} name={field.name} id={field.name} />
                                    )
                                })
                            }
                            <button className="btn btn-active">Upload</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Upload


// < input className = 'outline-none placeholder:text-white bg-transparent border-b p-2 border-[rgba(255,255,255,0.5)]' type = "text" placeholder = 'Title' name = "title" id = "title" />
//             <input className='outline-none placeholder:text-white bg-transparent border-b p-2 border-[rgba(255,255,255,0.5)]' type="text" placeholder='#tag' name="tag" id="tag" />
//             <textarea className='outline-none placeholder:text-white bg-transparent border-b p-2 border-[rgba(255,255,255,0.5)]' name="description" placeholder='Start typing...' id="description" cols={30} rows={8}></textarea>