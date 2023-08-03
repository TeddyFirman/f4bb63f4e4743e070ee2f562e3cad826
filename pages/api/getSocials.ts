// import type { NextApiRequest, NextApiResponse } from "next";
// import { groq } from "next-sanity";
// import { sanityClient } from "@/sanity";
// import { Social } from "@/typings";

// const query = groq`
// *[_type == "social"]
// `

// type Data = {
//     socials: Social[]
// }

// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse<Data>
// ) {
//     const socials: Social[] = await sanityClient.fetch(query);

//     res.status(200).json({ socials })
// }

import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "@/sanity";
import { Social } from "@/typings";

const query = groq`
*[_type == "social"]
`;

type Data = {
    socials: Social[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: Social[] = await sanityClient.fetch(query);

  // Set CORS headers to allow access from any origin
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.status(200).json({ socials });
}
