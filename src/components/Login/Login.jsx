import { useState } from "react";
import styles from "./Login.module.css";

export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      try {
        const response = await fetch("http://localhost:5000/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          setFormData({ email: "", password: "" });
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
      <section className={styles.loginSection}>
        <div className={styles.headlineContainer}>
          <span className={styles.headlineSpan}>Login</span>
        </div>
      </section>

      <section className={styles.loginSection}>
        <article className={styles.loginArticle}>
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
                <button type="submit">
                  Login
                </button>
              </p>
            </form>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Login;
