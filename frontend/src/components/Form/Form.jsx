import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="form">
      <h1>Contactez-nous</h1>
      <p className="centerP">
        Un problème, une question, envie de nous envoyer un message d’amour ?
        N’hésitez pas à utiliser ce formulaire pour prendre contact avec nous !
      </p>
      <form action="localhoste:3000" method="post">
        <p className="Pstart">Quelle est votre nom ?</p>
        <label for="nom">
          <input type="text" id="nom" name="nom" />
        </label>
        <p className="Pstart">Quelle est votre prenom ?</p>
        <label for="prenom">
          <input type="text" id="prenom" />
        </label>
        <p className="Pstart">Quelle est votre mail ?</p>
        <label for="mail">
          <input type="text" id="mail" />
        </label>
        <p className="Pstart">Quelle est l'object de votre message ?</p>
        <label for="object">
          <input type="text" id="object" />
        </label>
        <p className="centerP">Quelle est votre message ?</p>
        <label for="message">
          <input className="message" type="text" id="message" />
        </label>
        <br />
        <input className="envoyer" type="submit" value="Envoyer" />
      </form>
    </div>
  );
};

export default Form;
