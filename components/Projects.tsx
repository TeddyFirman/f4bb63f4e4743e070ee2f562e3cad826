'use client';

import React, { useEffect, useState } from 'react'
import { motion } from "framer-motion";
import { Project } from '@/typings';
import { fetchProjects } from '@/utils/fetchProjects';
import { urlFor } from '@/sanity';
import { projects } from "@/src/constants/index";

type Props = {
    projects: Project[];
};

function Projects({ projects }: Props) {

    const [loading, setLoading] = useState(true);
    const [loadedProjects, setLoadedProjects] = useState<Project[]>([]);

    useEffect(() => {
        // Fetch the socials data and set it to the state.
        fetchProjects()
            .then((data) => {
                setLoadedProjects(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching projects:', error);
                setLoading(false);
            });
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
            {/* <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                My Projects
            </h3> */}

            <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {/* Projects */}
                {loadedProjects?.map((project, i) => (
                    <div key={project?._id} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img
                            className="w-80 h-80 md:w-76 md:h-76"
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={urlFor(project?.image).url()} alt="" />
                        <div className="space-y-4 px-0 md:px-10 max-w-6xl">
                            <h4 className="text-[12px] md:text-3xl font-semibold text-center">
                                <span className="underline decoration-[#F7AB0A]/50">Project: {project?.title} </span>
                            </h4>

                            <div className="flex items-center space-x-2 justify-center">
                                {project?.technologies.map(technology => (
                                    <img
                                        className="h-[20px] w-[20px] md:h-10 md:w-10"
                                        key={technology?._id} src={urlFor(technology?.image).url()} alt="" />
                                ))}
                            </div>

                            <p className="text-sm text-center md:text-left">
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[250px] -skew-y-12" />
        </motion.div>
    )
}

export default Projects;