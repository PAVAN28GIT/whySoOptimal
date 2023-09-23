'use client'

import Link from 'next/link';
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Vision = () => {

    const timelineData = [
        {
            material: "Cotton Fabric",
            source: "Farmer from Jaipur",
            amount: "10Kg",
            location: "https://www.google.com/maps/place/GBR+Complex,+Triveni+Main+Rd,+Gokula+1st+Stage,+Mathikere+Extension,+Mathikere,+Bengaluru,+Karnataka+560054/@13.0293902,77.559381,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae17df60282a6d:0x7c9f0a59132e48c2!8m2!3d13.0293902!4d77.5619559!16s%2Fg%2F11b6ymn9y7?entry=ttu"
        },
        {
            material: "Blue Wool",
            source: "Farmer from Bihar",
            amount: "10Kg",
            location: "https://www.google.com/maps/place/GBR+Complex,+Triveni+Main+Rd,+Gokula+1st+Stage,+Mathikere+Extension,+Mathikere,+Bengaluru,+Karnataka+560054/@13.0293902,77.559381,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae17df60282a6d:0x7c9f0a59132e48c2!8m2!3d13.0293902!4d77.5619559!16s%2Fg%2F11b6ymn9y7?entry=ttu"
        },
        {
            material: "Cotton Fabric",
            source: "Farmer from Jaipur",
            amount: "10Kg",
            location: "https://www.google.com/maps/place/GBR+Complex,+Triveni+Main+Rd,+Gokula+1st+Stage,+Mathikere+Extension,+Mathikere,+Bengaluru,+Karnataka+560054/@13.0293902,77.559381,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae17df60282a6d:0x7c9f0a59132e48c2!8m2!3d13.0293902!4d77.5619559!16s%2Fg%2F11b6ymn9y7?entry=ttu"
        },
    ];

    return (
        <>
            <div className="wrapper min-h-screen flex flex-col items-center justify-center pt-20 lg:pt-24 lg:px-40 p-6 bg-[#262626] text-white">
                <div className="mission w-full">
                    <div className="vision my-2 flex flex-col items-center justify-center">
                        <h2 className='text-5xl lg:text-7xl mb-4 font-jost font-extrabold'>Traceability</h2>
                    </div>
                    <VerticalTimeline animate={true}>
                        {timelineData.map((data, index) => {
                            return (
                                <VerticalTimelineElement
                                    key={index}
                                    className="vertical-timeline-element--work"
                                    contentStyle={{ background: '#EC4899', color: '#fff', visibility: 'visible', }}
                                    contentArrowStyle={{ borderRight: '7px solid  #EC4899', visibility: 'visible' }}
                                    iconStyle={{ background: '#EC4899', color: '#fff', visibility: 'visible' }}
                                >
                                    <div className='font-jost text-justify w-full'>
                                        <h1 className='text-2xl md:text-2xl mb-3 font-extrabold'>Raw Material : {data.material}</h1>
                                        <Link target='_blank' href={data.location}>
                                            <h2 className='text-lg md:text-3xl mb-1 text-gray-400 font-bold'>Source : {data.source}</h2>
                                        </Link>
                                        <h3 className='text-base md:text-2xlmb-4'>Amount : {data.amount}</h3>
                                    </div>
                                </VerticalTimelineElement>
                            )
                        })}
                    </VerticalTimeline>
                </div>
            </div>
        </>
    );
};

export default Vision;

