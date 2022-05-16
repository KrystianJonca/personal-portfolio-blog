import type { NextPage } from 'next';
import React, { useMemo } from 'react';
import { urlFor } from '../../lib/sanity';
import Head from 'next/head';
import Image from 'next/image';
import { getClient } from '../../lib/sanity.server';
import { queryPost, queryPosts } from '../../lib/queries';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Post } from '../../typings';
import { ParsedUrlQuery } from 'querystring';
import { PortableText } from '@portabletext/react';

interface IBlogPostProps {
  post: Post;
}

const ptComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset?._ref) {
        return null;
      }
      return (
        <img
          alt={value.alt || ' '}
          loading="lazy"
          src={urlFor(value).fit('max').auto('format')}
          className="post-content_image"
        />
      );
    },
  },
};

const BlogPost: NextPage<IBlogPostProps> = ({ post }) => {
  const url = useMemo(
    () => urlFor(post.mainImage).width(640).height(360).url(),
    [post]
  );

  return (
    <>
      <Head>
        <title> | Krystian Jonca</title>
      </Head>

      <header>
        <h2 className="page-title">{post.title}</h2>
        <span>
          <Image src={url} alt={post.title} width="640" height="360" />
        </span>
      </header>

      <main>
        <PortableText value={post.body} components={ptComponents} />
      </main>

      <style jsx>
        {`
          header {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            margin: 0 2rem;
          }
          .page-title {
            font-weight: 400;
            font-size: 4rem;
            margin: 2rem;
            text-align: center;
          }
          @media only screen and (max-width: 600px) {
            .page-title {
              font-size: 2.5rem;
              margin: 1rem;
            }
          }
          main {
            max-width: 640px;
            margin: 1rem auto;
            margin-bottom: 2rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-contet: center;
            font-size: 1.2rem;
          }
        `}
      </style>
    </>
  );
};

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const sanityClient = await getClient();

  const post = await sanityClient.fetch(queryPost, { pageSlug: slug });

  return {
    props: {
      post,
    },
    revalidate: 60,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const sanityClient = await getClient();
  const posts = await sanityClient.fetch(queryPosts);

  const paths = posts.map((post: Post) => ({
    params: { slug: post.slug.current },
  }));

  return { paths, fallback: 'blocking' };
};

export default BlogPost;
