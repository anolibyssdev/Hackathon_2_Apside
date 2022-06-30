import React from "react";

const Form = () => {
  return (
    <div>
      <form action="localhoste:3004" method="post">
        <label For="nom">
          quelle est votre nom ?
          <input type="text" id="nom" />
        </label>
        <input type="submit" value="Envoyer" />
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Form;
