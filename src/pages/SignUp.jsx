import { useState } from "react";
import styles from "./SignUp.module.css";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submit gestartet");

    if (
      formData.email &&
      formData.password &&
      formData.password === formData.passwordConfirm
    ) {
      try {
        const response = await fetch("http://localhost:5000/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        console.log("Registrierung abgeschickt.");
        if (response.ok) {
          setFormData({ email: "", password: "", passwordConfirm: "" });
        } else {
          console.log("Fehler bei der Anmeldung");
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  return (
    <main>
      <section className={styles.signupSection}>
        <div className={styles.headlineContainer}>
          <span className={styles.headlineSpan}>Registrierung</span>
        </div>
      </section>

      <section className={styles.signupSection}>
        <article className={styles.signupArticle}>
          <div className={styles.sectionContentText}>
            <form
              className={styles.formData}
              onSubmit={handleSubmit}
              method="POST"
            >
              <p>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                  required
                />
              </p>
              <p>
                <label htmlFor="password">Passwort:</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Passwort"
                  name="password"
                  value={formData.password}
                  onChange={handleInput}
                  required
                />
              </p>
              <p>
                <label htmlFor="passwordConfirm">Passwort Wiederholung:</label>
                <input
                  type="password"
                  id="passwordConfirm"
                  placeholder="Passwort Wiederholung"
                  name="passwordConfirm"
                  value={formData.passwordConfirm}
                  onChange={handleInput}
                  required
                />
              </p>
              <p>
                <button type="submit">Registrieren</button>
              </p>
            </form>
          </div>
        </article>
      </section>
    </main>
  );
};

export default SignUp;
