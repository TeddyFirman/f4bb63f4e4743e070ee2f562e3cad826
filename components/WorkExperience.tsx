'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '@/typings';
import { fetchExperiences } from '@/utils/fetchExperiences';

type Props = {
    experiences: Experience[];
};

function WorkExperience({ experiences }: Props) {

    const [loading, setLoading] = useState(true);
    const [loadedExperiences, setLoadedExperiences] = useState<Experience[]>([]);

    useEffect(() => {
        // Fetch the socials data and set it to the state.
        fetchExperiences()
            .then((data) => {
                setLoadedExperiences(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching experiences:', error);
                setLoading(false);
            });
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
            className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-5 md:px-10 justify-evenly mx-auto items-center"
        >
            {/* <h3 className="absolute top-12 md:top-20 uppercase tracking-[2vw] text-gray-500 text-xl md:text-2xl">
                Experience
            </h3> */}
            <h3 className="absolute top-24 md:top-20 md:-mt-16 uppercase tracking-[20px] text-gray-500 ngukuk:text-[15px] text-2xl md:text-4xl">
                Experience
            </h3>
            <div className="w-full flex space-x-5 overflow-x-scroll p-5 md:p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 mt-24 md:mt-30 lg:mt-30 xl:mt-6">

                
                    <ExperienceCard experiences={experiences} />
                
            </div>
        </motion.div>
    );
}

export default WorkExperience;
