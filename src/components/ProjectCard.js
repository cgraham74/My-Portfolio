import React from "react";

export function ProjectCard({
  title,
  description,
  skillsUsed,
  image,
  gitHub,
  demo,
}) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>{skillsUsed}</ul>
      <a href={gitHub}>{title}</a>
      <p>{demo}</p>
    </div>
  );
}
