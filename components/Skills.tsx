'use client';

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion"
import Skill from './Skill';
import { Skill as SkillType } from '@/typings';
import { fetchSkills } from '@/utils/fetchSkills';

type Props = {
    skills: SkillType[];
};

function Skills({ skills }: Props) {

    const [loading, setLoading] = useState(true);
    const [loadedSkills, setLoadedSkills] = useState<SkillType[]>([]);

    useEffect(() => {
        // Fetch the socials data and set it to the state.
        fetchSkills()
            .then((data) => {
                setLoadedSkills(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching socials:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ duration: 1.2 }}
            className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center">
            <h3 className="absolute top-[66px] md:top-7 uppercase tracking-[20px] text-gray-500 text-2xl">
                Tech
            </h3>

            <h3 className="absolute top-[106px] md:top-16 uppercase tracking-[3px] text-gray-500 text-sm">Frequently used tech, but not only that</h3>

            <div className="grid grid-cols-4 gap-5 mt-[10px] md:mt-20 lg:mt-20 xl:mt-70 ">
                <Skill skills={skills} />
            </div>
        </div>
    )
}

export default Skills