'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Skill } from '@/typings';
import { fetchSkills } from '@/utils/fetchSkills';
import { urlFor } from '@/sanity';

type Props = {
  directionLeft?: boolean;
  skills: Skill[];
};

function Skill({ directionLeft, skills }: Props) {

  const [loading, setLoading] = useState(true);
  const [loadedSkills, setLoadedSkills] = useState<Skill[]>([]);

  useEffect(() => {
    // Fetch the pageInfo data and set it to the state.
    fetchSkills()
      .then((data) => {
        setLoadedSkills(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching pageInfo:', error);
        setLoading(false);
      });
  }, []);

  if (loading || loadedSkills.length === 0) {
    return <div></div>;
  }

  return (
    <>
      {loadedSkills.map((skills) => (
        <div className="group relative flex cursor-pointer">
          <img
            // initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
            // transition={{ duration: 1.2 }}
            // whileInView={{ opacity: 1, x: 0 }}
            src={urlFor(skills?.image).url()}
            className="rounded-full border border-gray-500 object-cover w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 filter group-hover:grayscale transition duration-300 ease-in-out"
          />
          <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
              <p className="text-sm font-bold text-black">{skills?.progress}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Skill;
