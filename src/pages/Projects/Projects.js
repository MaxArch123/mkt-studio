import React, { useEffect } from "react";
import "./projects.scss";
import allProjects from "../../assets/data/allProjects";
import ProjectCard from "./ProjectCard/ProjectCard";
import useISHeightSmall from "../../customHooks/useISHeightSmall";

export default function Projects(props) {
  const isSmall = useISHeightSmall();
  const data = allProjects;

  useEffect(() => {
    if (document) {
      if (isSmall) {
        document.querySelector("section").style.height = "100%";
        document.querySelector(".App").style.height = "100%";
        document.querySelector("nav.top-nav").style.position = "static";
      } else {
        document.querySelector("section").style.height = "fit-content";
        document.querySelector(".App").style.height = "fit-content";
        document.querySelector("nav.top-nav").style.position = "fixed";
      }
    }
  }, [isSmall]);

  const projectCards = data.map((project) => {
    if (project.type !== props.component.toLowerCase()) return;

    return (
      <ProjectCard
        language={props.language}
        key={project.id}
        id={project.id}
        type={project.type}
        title={project.title}
        titleUA={project.titleUA}
        image={project.image}
        whatIsOnImage={project.whatIsOnImage}
        feature={project.feature}
        description={project.description}
        descriptionUA={project.descriptionUA}
      />
    );
  });

  return <section className="projects">{projectCards}</section>;
}
