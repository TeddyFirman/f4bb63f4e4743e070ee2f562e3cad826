// import { Experience } from "@/typings";


// export const fetchExperiences = async () => {
//     // const res = await fetch(
//     //     `${process.env.VERCEL_URL ? 'https://teddyfirman.vercel.app' : 'http://localhost:3000'}/api/getExperience`,
//     //     // {
//     //     //     mode: 'no-cors' // Set the mode to 'no-cors' to disable CORS
//     //     // }
//     // );
//     const res = await fetch(
//         'http://localhost:3000/api/getExperience'
//     );

//     const data = await res.json();
//     const experiences: Experience[] = data.experiences;

//     return experiences;
// };


import { Experience } from "@/typings";

export const fetchExperiences = async () => {
  // const res = await fetch(
  //   `${process.env.VERCEL_URL ? 'https://teddyfirman.vercel.app' : 'http://localhost:3000'}/api/getExperience`,
  // );

  const isVercel = process.env.VERCEL_ENV === 'production';

  const res = await fetch(
    `${isVercel ? 'https://teddyfirman.vercel.app' : 'http://localhost:3000'}/api/getExperience`,
  );

  const data = await res.json();
  const experiences: Experience[] = data.experiences;

  return experiences;
};
