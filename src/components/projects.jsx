// import { Link } from "react-router-dom";
import { useEffect, useRef } from "react";

import { ArrowUpRight } from "phosphor-react";
import data from "../data/data.json";
import "../styles/projects.scss";
import { gsap } from "gsap";

function Projects() {
  const projectsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      projectsRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 3,
        stagger: 0.2,
        ease: "power3.out",
        clearProps: "all",
      }
    );
  }, []);
  return (
    <div className="projects-container">
      {data.map((project, index) => (
        <a
          key={index}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            ref={(el) => (projectsRef.current[index] = el)}
            className="project-container"
          >
            <div className="project-image">
              <img src={project.projectImage} alt="" />
            </div>
            <div className="project-infos">
              <h1 className="title">
                {project.title} <ArrowUpRight size={16} />
              </h1>
              <p className="description">{project.description}</p>
              <div className="tools">
                {project.tools.map((tool, index) => (
                  <span className="tool-tag" key={index}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Projects;
