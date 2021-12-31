import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import projects from "./projects";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import { Button } from "../Button";

//CSS
import "../../index.css";
import './project.css';
// Constants
const ProjectImage = (props) => {
  const { img } = props; // objet destructuring the properties
  return (
    <article className="book">
      <img src={img} alt="cover" />
    </article>
  );
};

const ProjectDescription = (props) => {
  const { title, technology, id } = props; // object destructuring the properties
  const [count, setCount] = useState(0);

  function decrementCount() {
    setCount((prevCount) => prevCount - 1);
  }

  function increaseCount() {
    setCount((prevCount) => prevCount + 1);
  }

  const url = `/carrito/${id}`;

  return (
    <div className="product-card">
      <div className="book-wrapper">
        <h2 className="book-title">{title}</h2>
        <h4>Proyecto: {title}</h4>
        <h4>Tecnologia: {technology}</h4>
        <div className="btnComprarWrapper">
          <Button className="btnComprar" onClick={decrementCount}>
            -
          </Button>
          <button className="btnComprar">{count}</button>
          <Button className="btnComprar" onClick={increaseCount}>
            +
          </Button>
        </div>
        <NavLink to={url}>
          <Button className="btnComprar">Agregar al carrito ahora</Button>
        </NavLink>
      </div>
    </div>
  );
};

function ProjectPage() {
  let { idUrl } = useParams();

  console.log(projects);
  let requestedProjects;

  projects.forEach((project) => {
    if (project.id === idUrl) {
      requestedProjects = project;
    }
  });

  return (
    <>
      <div className="container breadcrumbs">
        <h3>
          Estas comprando / {requestedProjects.category} /{" "}
          {requestedProjects.title}
        </h3>
      </div>
      <div className="product-wrapper">
        <>
          <ProjectDescription
            id={requestedProjects.id}
            title={requestedProjects.title}
            author={requestedProjects.url}
          ></ProjectDescription>
        </>
        <>
          <ProjectImage img={requestedProjects.img}></ProjectImage>
        </>
      </div>
    </>
  );
}

export default ProjectPage;
