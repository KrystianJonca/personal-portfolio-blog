import React from 'react';
import { PreviewPost } from '../../typings';
import PostCard from './PostCard';

interface IPostsProps {
  posts: Array<PreviewPost>;
}

const Posts: React.FC<IPostsProps> = ({ posts }) => {
  return (
    <>
      <div className="posts">
        {posts.map((post) => (
          <PostCard key={post.slug.current} post={post} />
        ))}
      </div>

      <style jsx>
        {`
          .posts {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: flex-start;
            margin: 0 auto;
            flex-wrap: wrap;
          }
        `}
      </style>
    </>
  );
};

export default React.memo(Posts);
