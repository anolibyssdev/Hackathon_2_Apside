import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="form">
      <h1>Contactez-nous</h1>
      <p className="p">
        Un problème, une question, envie de nous envoyer un message d’amour ?
        N’hésitez pas à utiliser ce formulaire pour prendre contact avec nous !
      </p>
      <form action="localhoste:3000" method="post">
        <p>Quelle est votre nom ?</p>
        <label For="nom">
          <input type="text" id="nom" />
        </label>
        <p>Quelle est votre prenom ?</p>
        <label For="prenom">
          <input type="text" id="prenom" />
        </label>
        <p>Quelle est votre mail ?</p>
        <label For="mail">
          <input type="text" id="mail" />
        </label>
        <p>Quelle est l'object de votre message ?</p>
        <label For="object">
          <input type="text" id="object" />
        </label>
        <p>Quelle est votre message ?</p>
        <label For="message">
          <input className="message" type="text" id="message" />
        </label>
        <br />
        <input className="envoyer" type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Form;
