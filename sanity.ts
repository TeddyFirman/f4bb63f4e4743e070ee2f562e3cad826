import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";

export const config = {
    dataset: "production",
    projectId: "cvn9kss6",
    apiVersion: '2023-08-02',
    useCdn: true
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source);