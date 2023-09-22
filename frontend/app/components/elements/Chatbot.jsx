import Link from 'next/link'
import React from 'react'
import { SiGooglemessages } from 'react-icons/si'

const Chatbot = () => {
    return (
        <Link target='_blank' href='https://landbot.online/v3/H-1727818-EAP0FCW9ULYSUOXV/index.html'>
            <div className='fixed bottom-8 right-6 md:right-8 z-40 rounded-full flex justify-center items-center font-firaCode text-xl border-black border-2 bg-black'>
                <SiGooglemessages className={`text-[#57E6D9] text-5xl`} />
            </div>
        </Link>
    )
}

export default Chatbot
