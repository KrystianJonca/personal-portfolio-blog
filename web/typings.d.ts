export interface Skill {
  tag: string;
}

interface Slug {
  current: string;
}

export interface PreviewPost {
  title: string;
  slug: Slug;
  mainImage: string;
}

export interface Post {
  title: string;
  slug: Slug;
  mainImage: string;
  publishedAt: Date;
  body: any;
}

export interface Project {
  name: string;
  image: string;
  desc: string;
  Link: string;
  techstack: Array<string>;
}
