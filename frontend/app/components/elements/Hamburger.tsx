'use client'

import { toggleNav } from '@/redux/features/navExpandSlice'
import { AppDispatch } from '@/redux/store'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'

const Hamburger = () => {

    const dispatch = useDispatch<AppDispatch>()
    const expandState = useSelector((state: any) => state.navReducer.isExpanded)

    const toggle = () => {
        dispatch(toggleNav(!expandState))
    }

    return (
        <div className="hamburger mx-2 lg:hidden flex flex-col space-y-1" onClick={toggle}>
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: expandState ? 45 : 0, y: expandState ? 7 : 0 }}
                transition={{ duration: 0.2 }}
                className={`line w-7 h-[0.2rem] bg-black rounded-full`}
            ></motion.div>
            <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: expandState ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className={`line text-left w-6 h-[0.2rem] bg-black rounded-full`}
            ></motion.div>
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: expandState ? -45 : 0, y: expandState ? -8 : 0 }}
                transition={{ duration: 0.2 }}
                className={`line w-7 h-[0.2rem] bg-black rounded-full`}
            ></motion.div>
        </div>
    )
}

export default Hamburger
