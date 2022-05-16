import type { NextPage } from 'next';
import Head from 'next/head';
import { getClient } from '../lib/sanity.server';
import { queryProjects } from '../lib/queries';
import { GetStaticProps } from 'next';
import { Projects } from '../components';
import { Project } from '../typings';

interface IPortfolioProps {
  projects: Array<Project>;
}

const Portfolio: NextPage<IPortfolioProps> = ({ projects }) => {
  return (
    <>
      <Head>
        <title>Portfolio | Krystian Jonca</title>
      </Head>

      <header>
        <h2 className="page-title">Portfolio</h2>
      </header>

      <main>
        <Projects projects={projects} />
      </main>

      <style jsx>
        {`
          .page-title {
            font-weight: 400;
            font-size: 4rem;
            margin: 2rem;
            text-align: center;
          }
          main {
            max-width: 540px;
            margin: 0 auto;
            margin-bottom: 2rem;
          }
          @media only screen and (max-width: 600px) {
            .page-title {
              font-size: 2.5rem;
              margin: 1rem;
            }
          }
        `}
      </style>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const sanityClient = await getClient();

  const projects = await sanityClient.fetch(queryProjects);

  return {
    props: {
      projects,
    },
    revalidate: 60,
  };
};

export default Portfolio;
