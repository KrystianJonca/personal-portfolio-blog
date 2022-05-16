import type { NextPage } from 'next';
import Head from 'next/head';
import { getClient } from '../../lib/sanity.server';
import { queryPosts } from '../../lib/queries';
import { GetStaticProps } from 'next';
import { Posts } from '../../components';
import { PreviewPost } from '../../typings';

interface IBlogProps {
  posts: Array<PreviewPost>;
}

const Blog: NextPage<IBlogProps> = ({ posts }) => {
  return (
    <>
      <Head>
        <title>Blog Posts | Krystian Jonca</title>
      </Head>

      <header>
        <h2 className="page-title">Posts</h2>
      </header>

      <main>
        <Posts posts={posts} />
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

  const posts = await sanityClient.fetch(queryPosts);

  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

export default Blog;
