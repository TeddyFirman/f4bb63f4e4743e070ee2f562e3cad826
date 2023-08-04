'use client';

// import React from 'react'
// import { SocialIcon } from 'react-social-icons'
// import { motion } from "framer-motion"
// import Link from 'next/link';
// import { Social } from '@/typing';
// import { fetchSocial } from '@/utils/fetchSocials';


// type Props = {
//     socials: Social[];
// };

// export default function Header({ socials }: Props) {

//     console.log('socials cek:', socials);

//     // console.log('cek fetch social: ',fetchSocial());

//     return (
//         <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
//             <motion.div
//                 initial={{
//                     x: -500,
//                     opacity: 0,
//                     scale: 0.5
//                 }}
//                 animate={{
//                     x: 0,
//                     opacity: 1,
//                     scale: 1
//                 }}
//                 transition={{
//                     duration: 1.2,
//                 }}
//                 className="flex flex-row items-center">
//                 {/* Social Icons */}
//                 {socials?.map((social) => (
//                     <SocialIcon key={social._id} url={social.url} fgColor="gray" bgColor="transparent" />
//                 ))}
//             </motion.div>

//             <motion.div
//                 initial={{
//                     x: 500,
//                     opacity: 0,
//                     scale: 0.5
//                 }}
//                 animate={{
//                     x: 0,
//                     opacity: 1,
//                     scale: 1
//                 }}
//                 transition={{
//                     duration: 1.2,
//                 }}
//                 className="flex flex-row items-center text-gray-300 cursor-pointer">
//                 <Link href="#contact">
//                     <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
//                     <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
//                 </Link>
//             </motion.div>
//         </header>
//     )
// }


import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Social } from '@/typings';
import { fetchSocial } from '@/utils/fetchSocials';

type Props = {
    // You can keep the socials prop as is.
    socials: Social[];
};

export default function Header({ socials }: Props) {
    const [loading, setLoading] = useState(true);
    const [loadedSocials, setLoadedSocials] = useState<Social[]>([]);

    useEffect(() => {
        // Fetch the socials data and set it to the state.
        fetchSocial()
            .then((data) => {
                setLoadedSocials(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching socials:', error);
                setLoading(false);
            });
    }, []);

    // if (loading) {
    //     // Handle loading state while data is being fetched.
    //     return <div></div>;
    // }

    return (
        <header className="sticky top-0 p-5 flex items-start justify-between max-w-3xl md:max-w-7xl mx-auto z-20 xl:items-center">
            <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.2,
                }}
                className="flex flex-row items-center"
            >
                {/* Social Icons */}
                {loadedSocials.map((social) => (
                    <SocialIcon key={social._id} url={social.url} fgColor="gray" bgColor="transparent" />
                ))}
            </motion.div>

            <motion.div
                initial={{
                    x: 500,
                    opacity: 0,
                    scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1,
                }}
                transition={{
                    duration: 1.2,
                }}
                className="flex flex-row items-center text-gray-300 cursor-pointer"
            >
                <Link href="#contact">
                    <SocialIcon className="cursor-pointer" network="email" fgColor="gray" bgColor="transparent" />
                    <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
                </Link>
            </motion.div>
        </header>
    );
}
