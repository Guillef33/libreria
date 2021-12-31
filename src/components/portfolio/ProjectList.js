import React, { useState }  from "react";
import projects from "./projects";
import Project from "./Project";


//CSS
import "../../index.css";
import "./project.css";

function BookList() {

  return (
    <>
      <section className="projectList">
        {projects.map((project) => (
          <Project
            img={project.img}
            title={project.title}
            tecnology={project.tecnology}
            id={project.id}
            job={project.job}
            url={project.url}
            category={project.category}
            key={project.id}
          />
        ))}
      </section>
    </>
  );
}

export default BookList;
