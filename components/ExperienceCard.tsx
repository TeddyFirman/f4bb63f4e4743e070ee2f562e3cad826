'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Experience } from '@/typings';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { urlFor } from '@/sanity';

type Props = {
  experiences: Experience[];
};

export default function ExperienceCard({ experiences }: Props) {

  const [loading, setLoading] = useState(true);
  const [loadedExperiences, setLoadedExperiences] = useState<Experience[]>([]);

  useEffect(() => {
    // Fetch the pageInfo data and set it to the state.
    fetchExperiences()
      .then((data) => {
        setLoadedExperiences(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching pageInfo:', error);
        setLoading(false);
      });
  }, []);

  // if (loading || loadedExperiences.length === 0) {
  //   return <div></div>;
  // }


  return (
    <>
      {loadedExperiences.map((experience) => (
        <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-full md:w-3/4 xl:w-1/2 snap-center bg-[#292929] p-5 md:p-8 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
          <motion.img
            initial={{
              y: -100,
              opacity: 0,
            }}
            transition={{ duration: 1.2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sm:w-[5px] sm:h-[5px] md:w-20 md:h-20 xl:w-20 xl:h-20 rounded-full object-cover object-center"
            src={urlFor(experience?.companyImage).url()}
            alt=""
          />

          <div className="px-0 md:px-6">
            <h4 className="text-sm md:text-2xl font-light">{experience?.jobTitle}</h4>
            <p className="font-bold text-sm md:text-sm mt-1">{experience?.company}</p>
            <div className="flex space-x-2 my-1 md:my-2">
              {/* Tech Used */}
              {experience?.technologies.map((technology) => (
                <img
                  className="h-6 w-6 md:h-8 md:w-8 rounded-full"
                  key={technology?._id}
                  src={urlFor(technology?.image).url()} alt="" />
              ))}
            </div>
            <p className="uppercase text-sm md:text-sm text-gray-300">
              {new Date(experience?.dateStarted).toDateString()} - {experience?.isCurrentlyWorkingHere ? "Present" : new Date(experience?.dateEnded).toDateString()}
            </p>
            <ul className="list-disc space-y-1 md:space-y-2 ml-3 md:ml-5 text-sm md:text-sm overflow-y-scroll scrollbar-thin scrollbar-track-[#F7AB0A]/80 scrollbar-thumb-black">
              {experience?.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </>
  );
}
