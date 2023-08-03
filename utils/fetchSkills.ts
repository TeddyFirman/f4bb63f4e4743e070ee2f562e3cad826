// import { Skill } from "@/typings";

// export const fetchSkills = async () => {
//     const res = await fetch(
//         `${process.env.VERCEL_URL ? 'https://teddyfirman.vercel.app' : 'http://localhost:3000'}/api/getSkills`,
        
//         // {
//         //     mode: 'no-cors' // Set the mode to 'no-cors' to disable CORS
//         // }
//     );

//     const data = await res.json()
//     const skills: Skill[] = data.skills;

//     // console.log("fetching: ", skills);

//     return skills;
// };

import { Skill } from "@/typings";

export const fetchSkills = async () => {
  const res = await fetch(
    `${process.env.VERCEL_URL ? 'https://teddyfirman.vercel.app' : 'http://localhost:3000'}/api/getSkills`,
  );

  const data = await res.json();
  const skills: Skill[] = data.skills;

  return skills;
};