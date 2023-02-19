import React from "react";

export function BlogPostCard({title, date, content}) {
  return (
    <article>
      <h2 className="hover-underline-animation">{title}</h2>
      <p>{date}</p>
      <p>{content}</p>
    </article>
  );
}
