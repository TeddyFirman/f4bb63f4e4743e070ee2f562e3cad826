// import { Project } from "@/typings";


// export const fetchProjects = async () => {
//     const res = await fetch(
//         `${process.env.VERCEL_URL ? 'https://teddyfirman.vercel.app' : 'http://localhost:3000'}/api/getProjects`,

//         // {
//         //     mode: 'no-cors' // Set the mode to 'no-cors' to disable CORS
//         // }
//     );
//     // const res = await fetch(
//     //     'http://localhost:3000/api/getProjects'
//     // );

//     const data = await res.json();
//     const projects: Project[] = data.projects;

//     return projects;
// };

import { Project } from "@/typings";

export const fetchProjects = async () => {
  // const res = await fetch(
  //   `${process.env.VERCEL_URL ? 'https://teddyfirman.vercel.app' : 'http://localhost:3000'}/api/getProjects`,
  // );
  // const isVercel = process.env.VERCEL_ENV === 'production';

  // const res = await fetch(
  //   `${isVercel ? 'https://teddyfirman.vercel.app' : 'http://localhost:3000'}/api/getProjects`,
  // );

  // const isVercel = process.env.NEXT_PUBLIC_VERCEL_URL === 'https://teddyfirman.vercel.app';

  // const res = await fetch(
  //   `${isVercel ? 'https://teddyfirman.vercel.app' : 'http://localhost:3000'}/api/getProjects`,
  // );

  const res = await fetch(
    'https://teddyfirman.vercel.app/api/getProjects'
  );

  const data = await res.json();

  const projects: Project[] = data.projects;

  return projects;
};