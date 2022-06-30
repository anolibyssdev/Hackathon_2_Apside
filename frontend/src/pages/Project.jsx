import React from "react";
import "../components/projectForm/project.css";
import Header from "@components/Header/Header";
import ProjectForm from "@components/projectForm/ProjectForm";

const Project = () => {
  //formulaire project
  return (
    <div>
      <Header />
      <div className="formBody">
        <ProjectForm />
      </div>
    </div>
  );
};

export default Project;
