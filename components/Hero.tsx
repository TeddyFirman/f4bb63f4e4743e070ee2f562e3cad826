'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { PageInfo } from '@/typings';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { urlFor } from '@/sanity';

import { useRouter } from 'next/navigation'

type Props = {
    pageInfo: PageInfo
};

export default function Hero({ pageInfo }: Props) {

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



    const [text, count] = useTypewriter({
        words: [
            `Hi, The Name's ${fetchedPageInfo?.name}`, "man-who-loves-development.php", "$butLoveMore = 'Backend Area';"],
        loop: true,
        delaySpeed: 2000,
    });

    // if (!fetchedPageInfo?.heroImage) {
    //     // console.error('Error: `heroImage` is undefined');
    //     router.push('/');
    //     return null; 
    // }

    return (
        <div className="h-screen flex flex-col space-y-5 items-center justify-center text-center overflow-hidden mt-20">
            <BackgroundCircles />
            <img
                className="relative rounded-full h-36 w-36 mx-auto object-cover"
                // src={urlFor(fetchedPageInfo?.heroImage).url()}
                src="https://cdn.sanity.io/images/f6lvo73m/production/96527501cfac66818d659e1d9c3f8edfab94d8c1-2084x2084.jpg"
                alt=""
            />
                <h2 className="text-xs uppercase text-gray-500 pb-1 tracking-[10px] z-20">
                    {fetchedPageInfo?.role}
                </h2>
                <h1 className="text-4xl lg:text-5xl font-semibold px-5 z-20">
                    <span className="mr-2">{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
            <div className="z-20">
                <div className="mx-auto grid grid-cols-2 md:grid-cols-4">
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
