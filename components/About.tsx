'use client';

import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { PageInfo } from '@/typings';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { urlFor } from '@/sanity';
 
import { useRouter } from 'next/navigation'

type Props = {
    pageInfo: PageInfo;
};

export default function About({ pageInfo }: Props) {

    const [loading, setLoading] = useState(true);
    const [fetchedPageInfo, setFetchedPageInfo] = useState<PageInfo | null>(null);
    const router = useRouter();

    useEffect(() => {
        // Fetch the pageInfo data and set it to the state.
        fetchPageInfo()
            .then((data) => {
                setFetchedPageInfo(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching pageInfo:', error);
                setLoading(false);
            });
    }, []);

    // if (!fetchedPageInfo) {
    //     // console.error('Error: `heroImage` is undefined');
    //     router.push('/');
    //     return null; 
    // }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-[70px] md:top-20 md:-mt-16 uppercase tracking-[20px] text-gray-500 text-2xl md:text-4xl">
                About
            </h3>

            <motion.img
                initial={{
                    x: -100,
                    opacity: 0,
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                viewport={{
                    once: true,
                }}
                // src={urlFor(fetchedPageInfo?.profilePic).url()}
                src="https://cdn.sanity.io/images/f6lvo73m/production/6e50ce9db4589aaf7fbd6c0965ae624ebbdc48c0-774x1032.jpg?rect=0,171,774,861"
                className="-mb-10 md:-mb-0 flex-shrink-0 w-32 h-32 md:w-48 md:h-48 xl:w-[320px] xl:h-[400px] rounded-full object-cover md:rounded-lg"
            />

            <div className="space-y-5 md:space-y-10 md:px-10">
                <h4 className="text-xl md:text-4xl font-semibold">
                    My <span className="underline decoration-[#F7AB0A]">little</span> background
                </h4>
                <p className="text-sm md:text-base">
                    {fetchedPageInfo?.backgroundInformation}
                </p>
            </div>
        </motion.div>
    );
}
