import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./Password.module.css";

export const Password = () => {
  const [formData, setFormData] = useState({
    password: "",
    passwordConfirm: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password && formData.password === formData.passwordConfirm) {
      try {
        const response = await fetch("http://localhost:5000/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormData({ email: "", password: "" });
        } else {
          console.error("Fehler bei der Anmeldung");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;

    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleClose = () => {
    navigate("/profile");
  };

  return (
    <div className={styles.SectionContentText}>
      <form className={styles.FormData} onSubmit={handleSubmit} method="POST">
        <p>
          <label htmlFor="password">Passwort</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInput}
          />
        </p>
        <p>
          <label htmlFor="">Passwort Wiederholung</label>
          <input
            type="password"
            id="passwordConfirm"
            name="passwordConfirm"
            value={formData.passwordConfirm}
            onChange={handleInput}
          />
        </p>
        <p>
          <button type="submit">Speichern</button>
          <button onClick={handleClose}>Abbrechen</button>
        </p>
      </form>
    </div>
  );
};

export default Password;
