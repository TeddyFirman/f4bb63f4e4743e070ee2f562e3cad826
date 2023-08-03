'use client';

import React from 'react';
import { motion } from "framer-motion";

type Props = {}

function BackgroundCircles({ }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "70%", "20%"]
            }}
            transition={{
                duration: 2.5
            }}
            className="relative flex justify-center items-center"
        >
            <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px] mt-48 animate-ping" />
            <div className="rounded-full border border-[#333333] h-[195px] w-[195px] absolute mt-48" />
            <div className="rounded-full border border-[#333333] h-[290px] w-[290px] absolute mt-48" />
            <div className="rounded-full border border-[#F7AB0A] opacity-20 h-[355px] w-[355px] absolute mt-48 animate-pulse" />
            <div className="rounded-full border border-[#333333] h-[430px] w-[430px] absolute mt-48" />
        </motion.div>
    )
}

export default BackgroundCircles