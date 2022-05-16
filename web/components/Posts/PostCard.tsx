import React, { useMemo } from 'react';
import { PreviewPost } from '../../typings';
import { urlFor } from '../../lib/sanity';
import Link from 'next/link';

interface IPostCardProps {
  post: PreviewPost;
}

const PostCard: React.FC<IPostCardProps> = ({ post }) => {
  const url = useMemo(
    () => urlFor(post.mainImage).width(231).height(130).url(),
    [post]
  );
  return (
    <>
      <Link href={`/blog/${post.slug.current}`}>
        <div className="post">
          <img
            src={url}
            alt={post.title}
            width="231"
            height="130"
            className="post-image"
          />
          <h3 className="post-title">{post.title}</h3>
        </div>
      </Link>
      <style jsx>
        {`
          .post {
            margin: 0.5rem;
            cursor: pointer;
            border-radius: 10px;
          }
          .post-image {
            border-radius: 10px;
            opacity: 1;
            transition: all 0.2s ease-in-out;
          }
          .post-image:hover {
            opacity: 0.5;
          }
          .post-title {
            text-align: center;
            font-weight: 400;
            margin: 0.2rem 0;
            font-size: 1.2rem;
          }
        `}
      </style>
    </>
  );
};

export default React.memo(PostCard);
