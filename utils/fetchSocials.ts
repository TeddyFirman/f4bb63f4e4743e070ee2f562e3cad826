// import { Social } from "@/typings";

// export const fetchSocial = async () => {
//     const res = await fetch(`${process.env.VERCEL_URL ? 'https://teddyfirman.vercel.app' : 'http://localhost:3000'}/api/getSocials`, 
//     // {
//     //     mode: 'no-cors' // Set the mode to 'no-cors' to disable CORS
//     // }
//     );


//     const data = await res.json()
//     const socials: Social[] = data.socials;

//     // console.log("fetching: ", socials);

//     return socials;
// };

import { Social } from "@/typings";

export const fetchSocial = async () => {
  // const res = await fetch(
  //   `${process.env.VERCEL_URL ? 'https://teddyfirman.vercel.app' : 'http://localhost:3000'}/api/getSocials`,
  // );
  const isVercel = process.env.VERCEL_ENV === 'production';

const res = await fetch(
  `${isVercel ? 'https://teddyfirman.vercel.app' : 'http://localhost:3000'}/api/getSocials`,
);

  const data = await res.json();
  const socials: Social[] = data.socials;

  return socials;
};