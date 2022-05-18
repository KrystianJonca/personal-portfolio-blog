import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Header, SocialLink, Skills, Posts, Projects } from '../components';
import { FaGithub, FaTwitter, FaEnvelope, FaLinkedin } from 'react-icons/fa';
import { getClient } from '../lib/sanity.server';
import Link from 'next/link';
import {
  queryLatestPosts,
  queryHighlightedProjects,
  querySkills,
} from '../lib/queries';

import { PreviewPost, Project, Skill } from '../typings';

interface IHomeProps {
  posts: Array<PreviewPost>;
  projects: Array<Project>;
  skills: Array<Skill>;
}

const Home: NextPage<IHomeProps> = ({ posts, projects, skills }) => {
  return (
    <>
      <Head>
        <title>Krystian Jonca | Passionate Web Developer</title>
        <meta
          name="description"
          content="Eighteen years old passionate and enthusiastic programmer, based in Poland, who has worked with multiple modern front-end as well as full-stack technologies. Writing quality JavaScript code for 4+ years."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main>
        <section className="section">
          <h2>
            <span className="section-heading">Projects</span>
          </h2>
          <Projects projects={projects} />
          <div className="link-container">
            <span className="link">
              <Link href="/portfolio">See more</Link>
            </span>
          </div>
        </section>
        <section className="section">
          <h2>
            <span className="section-heading">Skills</span>
          </h2>
          <Skills skills={skills} />
        </section>
        <section className="section">
          <h2>
            <span className="section-heading">Latest posts</span>
          </h2>
          <Posts posts={posts} />
        </section>
        <section className="section">
          <h2>
            <span className="section-heading">Links</span>
          </h2>
          <div className="links">
            <SocialLink
              href="https://github.com/KrystianJonca"
              icon={<FaGithub />}
              text="GitHub"
            />
            <SocialLink
              href="https://twitter.com/KrystianJonca"
              icon={<FaTwitter />}
              text="Twitter"
            />
            <SocialLink
              href="https://www.linkedin.com/in/krystianjonca/"
              icon={<FaLinkedin />}
              text="LinkedIn"
            />

            <SocialLink
              href="mailto:krystianjonca17@gmail.com"
              icon={<FaEnvelope />}
              text="E-mail"
            />
          </div>
        </section>
      </main>
      <style jsx>
        {`
          main {
            margin: 0 1.5rem;
          }
          .section {
            text-align: left;
            max-width: 540px;
            margin: 0 auto;
            margin-bottom: 2rem;
          }
          .section-heading {
            padding-bottom: 0.2rem;
            border-bottom: 4px solid;
            font-weight: 300;
            font-size: 2.5rem;
            margin-bottom: 0;
          }
          .links {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;
          }
          .link-container {
            display: grid;
            place-items: center;
          }
          .link {
            display: inline-block;
            margin: 0.2rem;
            padding: 0.6rem 1rem;
            border-radius: 10px;
            transition: all 0.2s ease-in-out;
            font-size: 1.2rem;
          }
          .link:hover {
            background-color: rgba(255, 255, 255, 0.1);
          }
        `}
      </style>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const sanityClient = await getClient();

  const posts = await sanityClient.fetch(queryLatestPosts);
  const projects = await sanityClient.fetch(queryHighlightedProjects);
  const skills = await sanityClient.fetch(querySkills);

  return {
    props: {
      posts,
      projects,
      skills,
    },
    revalidate: 60,
  };
};

export default Home;
