// import { PageInfo } from "@/typings";


// export const fetchPageInfo = async () => {
//     const res = await fetch(
//         `${process.env.VERCEL_URL ? 'https://teddyfirman.vercel.app' : 'http://localhost:3000'}/api/getPageInfo`,
        
//         // {
//         //     mode: 'no-cors' // Set the mode to 'no-cors' to disable CORS
//         // }
//     );

//     const data = await res.json();
//     const pageInfo: PageInfo = data.pageInfo;

//     return pageInfo;
// };

import { PageInfo } from "@/typings";

export const fetchPageInfo = async () => {
  const res = await fetch(
    `${process.env.VERCEL_URL ? 'https://teddyfirman.vercel.app' : 'http://localhost:3000'}/api/getPageInfo`,
  );

  const data = await res.json();
  const pageInfo: PageInfo = data.pageInfo;

  return pageInfo;
};