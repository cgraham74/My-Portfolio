import React, { useState , useEffect} from "react";
import { ProjectCard } from "../components/ProjectCard";
import { projectData } from "../data/projects";

export default function Projects() {
  const [projects, setProjects] = useState(projectData);

  useEffect(() => {
    setProjects(projectData);
  }, [projects]);
  
  console.log(projects);
  return (
    <>
      <h2 className="project-title">Projects</h2>
      <ul className="project-container">
        <li>
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              skillsUsed={project.skillsUsed}
              image={project.image}
              gitHub={project.gitHub}
              demo={project.demo}
            />
          ))}
        </li>
      </ul>
    </>
  );
}
