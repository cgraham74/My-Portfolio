import React, { useState, useEffect } from "react";
import { BlogPostCard } from "../components/BlogPostCard";
import { postData } from "../data/postData";

export default function Blog() {
  const [posts, setPosts] = useState(postData);

    useEffect(() => {
      setPosts(postData);
    }, [posts]);

  console.log({ posts });
  return (
    <>
      <h2 className="blog-title">Blog</h2>
      <ul className="blog-container">
        <li>
          {posts.map((post, index) => (
            <BlogPostCard
              key={index}
              title={post.title}
              date={post.date}
              content={post.content}
            />
          ))}
        </li>
      </ul>
    </>
  );
}
