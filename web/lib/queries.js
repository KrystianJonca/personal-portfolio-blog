import { groq } from 'next-sanity';

export const querySkills = groq`*[_type == "skill"] | order(_createdAt asc) { tag }`;
export const queryLatestPosts = groq`*[_type == "post"] | order(_createdAt desc)[0...4] { title, slug, mainImage }`;
export const queryPosts = groq`*[_type == "post"] | order(_createdAt desc) { title, slug, mainImage }`;
export const queryPost = groq`*[_type == "post" && slug.current == $pageSlug][0] { title,slug, mainImage, body, _createdAt }`;
export const queryHighlightedProjects = groq`*[_type == "project"][0...4] { name, image, Link, techstack, desc }`;
export const queryProjects = groq`*[_type == "project"] { name, image, Link, techstack, desc }`;
