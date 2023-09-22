'use client'

import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import Link from 'next/link';

const ListComponent = ({ material, source, amount, location }) => {
    const ref = useRef(null);

    return (
        <li id='1' ref={ref} className='text-white flex flex-col'>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="wrapper">
                <h1 className='text-2xl md:text-4xl mb-3 font-extrabold'>Raw Material : {material}</h1>
                <Link target='_blank' href={location}>
                    <h2 className='text-lg md:text-3xl mb-1 text-gray-400 font-bold'>Source : {source}</h2>
                </Link>
                <h3 className='text-base md:text-2xl text-gray-400 mb-4'>Amount : {amount}</h3>
            </motion.div>
        </li>
    )
}


const Education = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center"]
    });

    return (
        <>
            <div className="min-h-screen bg-[#181a1b] font-firaCode md:py-28 pb-32 md:pb-24 px-20 md:w-full">
                <div className="heading flex items-center pb-12 space-x-4">
                    <h1 className='text-5xl md:text-7xl my-8 font-extrabold text-[#57E6D9]'>Traceability</h1>
                    <div className="line rounded-full w-3/4 h-1 bg-[#57E6D9]"></div>
                </div>
                <div ref={ref} className="points w-3/4 mx-auto relative">
                    <motion.div
                        style={{ scaleY: scrollYProgress }}
                        className="line absolute transition-all duration-100 rounded-full -left-8 top-0 w-1 h-full bg-[#57E6D9] origin-top"></motion.div>
                    <div className="content ml-2 md:ml-6 lg:ml-10">
                        <ul className='flex flex-col space-y-20'>
                            <ListComponent
                                material="Cotton Fabric"
                                source="Farmer from Jaipur"
                                amount="10Kg"
                                location="https://www.google.com/maps/place/GBR+Complex,+Triveni+Main+Rd,+Gokula+1st+Stage,+Mathikere+Extension,+Mathikere,+Bengaluru,+Karnataka+560054/@13.0293902,77.559381,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae17df60282a6d:0x7c9f0a59132e48c2!8m2!3d13.0293902!4d77.5619559!16s%2Fg%2F11b6ymn9y7?entry=ttu" />
                            <ListComponent
                                material="Blue Wool"
                                source="Farmer from Bihar"
                                amount="10Kg"
                                location="https://www.google.com/maps/place/GBR+Complex,+Triveni+Main+Rd,+Gokula+1st+Stage,+Mathikere+Extension,+Mathikere,+Bengaluru,+Karnataka+560054/@13.0293902,77.559381,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae17df60282a6d:0x7c9f0a59132e48c2!8m2!3d13.0293902!4d77.5619559!16s%2Fg%2F11b6ymn9y7?entry=ttu" />
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Education;