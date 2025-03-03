import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import styles from "./Login.module.css";

export const Login = () => {
  const { user, login, isAuthenticated } = useContext(AuthContext);

  if (user && isAuthenticated) {
    console.log("User", user);
    console.log("isAuthenticated :", isAuthenticated);
  } else {
    console.log("User und IsAuthenticated unbekannt.");
  }

  const [formData, setFormData] = useState({
    email: "andwit@test1050.de",
    password: "!Passwort1000DE!",
  });

  const [errMessage, setErrMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.email && formData.password) {
      try {
        setErrMessage(login(formData));
        console.log("errMsg: ", errMessage);
      } catch (error) {
        console.log("Error - Login", error);
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
                <button type="submit">Login</button>
              </p>
            </form>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Login;
