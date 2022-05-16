import { groq } from 'next-sanity';

export const querySkills = groq`[_type == "skill"]`;
export const queryLatestPosts = groq`[_type == "post"] | order(_createdAt desc)[0...4] { title, slug, mainImage }`;
export const queryPosts = groq`[_type == "post"] | order(_createdAt desc) { title, slug, mainImage }`;
export const queryPost = groq`[_type == "post" && slug.current == $pageSlug][0]`;
export const queryHighlightedProjects = groq`[_type == "project"][0...4]`;
export const queryProjects = groq`[_type == "project"]`;
