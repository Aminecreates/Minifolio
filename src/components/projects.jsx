// import { Link } from "react-router-dom";
import { ArrowUpRight } from "phosphor-react";
import data from "../data/data.json";
import "../styles/projects.scss";

function Projects() {
  return (
    <div className="projects-container">
      {data.map((project, index) => (
        <a key={index} href={project.url}>
          <div className="project-container">
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
