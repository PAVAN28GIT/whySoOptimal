import React from 'react'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ weight: '700', subsets: ['latin'] })

const Hero = () => {
    return (
        <div className='py-28 flex items-center md:px-20 lg:px-20 xl:px-28 px-4 relative min-h-screen bg-center bg-cover text-black bg-[url("/images/heroMobile2.jpg")] md:bg-[url("/images/heroPC.jpg")]'>
            <div className='absolute h-full inset-0 bg-gradient-to-r md:bg-gradient-to-l from-transparent via-opacity-50 to-black'></div>
            <div className="content relative z-20 space-y-4 md:space-y-8">
                <h1 className={`${poppins.className} text-6xl md:text-8xl font-bold text-white`}>Explore Jammu & Kashmir&apos;s Unique Treasures</h1>
                <h2 className='text-2xl md:text-5xl font-bold text-white'>Discover Handcrafted Wonders and Local Delights</h2>
                <p className='text-white text-lg md:text-2xl'>
                    Welcome to a world of artistry and authenticity. Immerse yourself in the rich culture of Jammu & Kashmir through our curated collection of handcrafted products. From intricate handicrafts to exquisite textiles and flavorful dry fruits, each item tells a story. Join us in supporting local artisans and embracing the true essence of this beautiful region
                </p>
                <button className="btn btn-active">Explore</button>
            </div>
        </div>
    )
}

export default Hero
