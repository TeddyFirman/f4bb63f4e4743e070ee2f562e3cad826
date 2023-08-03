// 'use client';

import Head from 'next/head'
import styles from './page.module.css'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'
import type { GetStaticProps } from 'next';
import { Experience, PageInfo, Project, Skill, Social } from '@/typings'
import { fetchPageInfo } from '@/utils/fetchPageInfo'
import { fetchExperiences } from '@/utils/fetchExperiences'
import { fetchSkills } from '@/utils/fetchSkills'
import { fetchProjects } from '@/utils/fetchProjects'
import { fetchSocial } from '@/utils/fetchSocials'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

const initData = async (): Promise<Props> => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    pageInfo,
    experiences,
    skills,
    projects,
    socials,
  };
}
export default async function Home() {
  let {
    pageInfo,
    experiences,
    skills,
    projects,
    socials,
  } = await initData();

  // const fetchData = async (): Promise<Props> => {
  //   pageInfo = await fetchPageInfo();
  //   experiences = await fetchExperiences();
  //   skills = await fetchSkills();
  //   projects = await fetchProjects();
  //   socials = await fetchSocial();

  //   return{
  //     pageInfo,
  //     experiences,
  //     skills,
  //     projects,
  //     socials,
  //   };
  // };


  // const router = useRouter();

  // // Reset scroll position to top on component mount
  // useEffect(() => {
  //   // fetchData();
  //   router.prefetch('/');
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">

      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      {/* Header */}
      <Header socials={socials} />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://cdn.sanity.io/images/f6lvo73m/production/8bf9d08fc126b7b8a96e22a9e67b00a1d60a6f6a-128x128.png" alt="" />
          </div>
        </footer>
      </Link>

    </div>
  )
}
