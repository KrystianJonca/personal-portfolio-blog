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
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-evenly;
            flex-wrap: wrap;
          }
        `}
      </style>
    </>
  );
};

export default React.memo(Posts);
