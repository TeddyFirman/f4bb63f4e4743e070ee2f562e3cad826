// import type { NextApiRequest, NextApiResponse } from "next";
// import { groq } from "next-sanity";
// import { sanityClient } from "@/sanity";
// import { Experience } from "@/typings";
// // import {PageInfo, Social} from "@/typings";

// const query = groq`
// *[_type == "experience"]{
//     ...,
//     technologies[]->
// }
// `

// type Data = {
//     experiences: Experience[]
// }

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ) {
//     const experiences: Experience[] = await sanityClient.fetch(query);

//     res.status(200).json({ experiences })
// }

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Experience } from "@/typings";

const query = groq`
*[_type == "experience"]{
    ...,
    technologies[]->
}
`;

type Data = {
  experiences: Experience[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences: Experience[] = await sanityClient.fetch(query);

  // Set CORS headers to allow access from any origin
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.status(200).json({ experiences });
}
