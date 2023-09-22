import Link from 'next/link'
import React from 'react'

const craftsmen = () => {
    return (
        <div className='products px-40 pt-20 pb-20 min-h-screen bg-slate-400'>
            <h1 className='text-8xl font-extrabold pb-10'>Craftsmen</h1>
            <div className="semester bg-[#D7D9DD] shadow-2xl shadow-black p-5 rounded-2xl mb-6 mx-2 lg:mx-5 flex justify-center w-full ">
                <Link className='w-1/4 lg:w-1/2 flex items-center justify-center mr-4' target='_blank' href={`https://github.com/vishalchaurasia10`}>
                    <img title='Click to view' className='cursor-pointer rounded-xl w-full mb-3 hover:scale-105 transition-all duration-300' src={`https://images.yourstory.com/cs/21/98e25df018b511e988ceff9061f4e5e7/Imagephmr1573470708210jpg?w=1152&fm=auto&ar=2:1&mode=crop&crop=faces`} width={300} height={300} alt='subjectFolder' />
                </Link>
                <div className="details w-3/4 ml-2 lg:w-full flex flex-col justify-center">
                    <div className="updateDetails flex-col space-y-4 text-xs flex my-1 ">
                        <p className='text-2xl font-bold'>Name : Raju Rastogi</p>
                        <p className='text-2xl font-bold'>Bio : I am a pro craftsman. I can craft anything.</p>
                        <p className='text-2xl font-bold'>Ratings : 4.8</p>
                        <Link href='/products'>
                            <p className='text-2xl font-bold hover:underline'>View Products</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="semester bg-[#D7D9DD] shadow-2xl shadow-black p-5 rounded-2xl mb-6 mx-2 lg:mx-5 flex justify-center w-full ">
                <Link className='w-1/4 lg:w-1/2 flex items-center justify-center mr-4' target='_blank' href={`https://github.com/vishalchaurasia10`}>
                    <img title='Click to view' className='cursor-pointer rounded-xl w-full mb-3 hover:scale-105 transition-all duration-300' src={`https://miradorlife.com/wp-content/uploads/2021/08/header-6.png`} width={300} height={300} alt='subjectFolder' />
                </Link>
                <div className="details w-3/4 ml-2 lg:w-full flex flex-col justify-center">
                    <div className="updateDetails flex-col space-y-4 text-xs flex my-1 ">
                        <p className='text-2xl font-bold'>Name : Reena Rastogi</p>
                        <p className='text-2xl font-bold'>Bio : I make products.</p>
                        <p className='text-2xl font-bold'>Ratings : 4.5</p>
                        <Link href='/products'>
                            <p className='text-2xl font-bold hover:underline'>View Products</p>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="semester bg-[#D7D9DD] shadow-2xl shadow-black p-5 rounded-2xl mb-6 mx-2 lg:mx-5 flex justify-center w-full ">
                <Link className='w-1/4 lg:w-1/2 flex items-center justify-center mr-4' target='_blank' href={`https://github.com/vishalchaurasia10`}>
                    <img title='Click to view' className='cursor-pointer rounded-xl w-full mb-3 hover:scale-105 transition-all duration-300' src={`https://idronline.org/wp-content/uploads/2022/01/woman-artisan-standing-in-front-of-a-rug_Jaipur-Rugs-4_resize.jpg`} width={300} height={300} alt='subjectFolder' />
                </Link>
                <div className="details w-3/4 ml-2 lg:w-full flex flex-col justify-center">
                    <div className="updateDetails flex-col space-y-4 text-xs flex my-1 ">
                        <p className='text-2xl font-bold'>Name : Seema Rastogi</p>
                        <p className='text-2xl font-bold'>Bio : Dedicated artisian.</p>
                        <p className='text-2xl font-bold'>Ratings : 4.6</p>
                        <Link href='/products'>
                            <p className='text-2xl font-bold hover:underline'>View Products</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default craftsmen
