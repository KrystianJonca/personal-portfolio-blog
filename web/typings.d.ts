export interface Skill {
  tag: string;
}

export interface PreviewPost {
  title: string;
  slug: string;
  mainImage: string;
}

export interface Post {
  title: string;
  slug: string;
  mainImage: string;
  publishedAt: Date;
  body: any;
}

export interface Project {
  name: string;
  image: string;
  desc: string;
  link: string;
  techstack: Array<string>;
}
