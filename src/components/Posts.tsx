import React, { FC } from "react";

interface PostsProps {
  posts: Post[];
  isLoading?: boolean;
}

interface Post {
  id?: number | string;
  title?: string;
}

const Posts: FC<PostsProps> = ({ posts, isLoading }) => {
  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <ul className="list-group mb-4">
          {posts.map((post: Post) => (
            <li key={post.id} className="list-group-item">
              {post.title}
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Posts;
