import "./Header.css";
import ProfilePicture from "@assets/woman-picture.jpg";
import LogoApsideBlanc from "@assets/logo-apside-blanc.png";

const Header = () => {
  return (
    <div className="navbar">
      <div className="user">
        <img
          className="profilePicture"
          src={ProfilePicture}
          alt="Profile picture"
        />
        <p className="name">Nom Prenom</p>
      </div>
      <div className="logo">
        <img
          className="logoapside"
          src={LogoApsideBlanc}
          alt="Logo apside blanc"
        />
      </div>
      <div className="links">
        <ul className="linksT">
          <li>
            <a href="/">Acceuil</a>
          </li>
          <li>
            <a href="/project">Project</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
        <ul className="linkB">
          <li>
            <a href="/login">Login/Register</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
