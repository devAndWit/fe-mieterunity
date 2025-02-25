import { Link } from "react-router";
import profil_icon from "../assets/logo_with_background.png";

export const Profile = () => {
  return (
    <main className="UserProfil">
      <form action="">
        <h2>Benutzer</h2>

        <div className="figureContent">
          <figure>
            <img src={profil_icon} alt="userprofile image" />
            <figcaption>user.jpg</figcaption>
          </figure>
          <button>Profilbild ändern</button>
        </div>

        <p>
          <label htmlFor="username">Benutzername:</label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Benutzername"
          />
        </p>

        <p>
          <label htmlFor="phone">Telefon:</label>
          <input type="text" name="phone" id="phone" placeholder="Telefon" />
        </p>

        <p>
          <label htmlFor="mail">Email:</label>
          <input type="text" name="mail" id="mail" placeholder="Email" />
        </p>

        <p>
          <span>Standort:</span>
          <Link to="/profile/locations">Standort</Link>
        </p>
        <p>
          <span>Einstellungen:</span>
          <Link to="/profile/settings">Einstellungen</Link>
        </p>
        <p>
          <span>Passwort:</span>
          <Link to="/profile/password">Passwort</Link>
        </p>

        <p>
          <span>Konto:</span>
          <Link to="/profile/account">Konto</Link>
        </p>

        <p>
          <Link to="/">Save</Link>
          <Link to="/">Close</Link>
        </p>
      </form>
    </main>
  );
};

export default Profile;
