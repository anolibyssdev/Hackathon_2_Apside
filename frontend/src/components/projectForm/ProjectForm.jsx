import React from "react";

const ProjectForm = () => {
  return (
    <div className="form">
      <h1>New Project</h1>
      <p className="centerP">Formulaire de creation de project</p>
      <form action="localhoste:3000" method="post">
        <p className="Pstart">Titre</p>
        <label for="titre">
          <input type="text" id="titre" name="titre" />
        </label>
        <p className="Pstart">Description</p>
        <label for="description">
          <input type="text" id="description" name="description" />
        </label>
        <p className="Pstart">Techno/language</p>
        <label for="techno">
          <input className="titre" type="text" id="techno" />
        </label>
        <br />
        <input className="envoyer" type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default ProjectForm;
