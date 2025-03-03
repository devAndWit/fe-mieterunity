import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext.jsx";
import styles from "./SignUp.module.css";

export const SignUp = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  const { signup } = useContext(AuthContext);

  useEffect(() => {
    const showErrMessage = () => {
      console.log(errMessage);
    };
    showErrMessage();
  }, [errMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isValidEmail && isValidPassword && passwordConfirm)
      setErrMessage(signup(formData));
  };

  const handleInput = (e) => {
    setErrMessage("");
    const { name, value } = e.target;
    setFormData((prevValues) => ({ ...prevValues, [name]: value }));
  };

  useEffect(() => {
    const validate = (type, value) => {
      const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

      if (value === "") return false;

      switch (type) {
        case "email":
          console.log("email :", formData.email);
          return value.match(emailPattern);

        case "password":
          console.log("password :", formData.password);
          return value.match(passwordPattern);
      }
      return false;
    };

    const checkPasswordConfirm = () => {
      return formData.password === passwordConfirm;
    };

    setIsValidEmail(validate("email", formData.email));
    setIsValidPassword(validate("password", formData.password));
    setIsPasswordConfirm(checkPasswordConfirm);
  }, [formData.email, formData.password, passwordConfirm]);

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
              <p className={isValidEmail ? styles.checked : ""}>
                <label htmlFor="email">Email:</label>
                <input
                  type="text"
                  id="email"
                  className={isValidEmail ? styles.isValid : styles.isNotValid}
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInput}
                  required
                />
              </p>
              <p className={isValidPassword ? styles.checked : ""}>
                <label htmlFor="password">Passwort:</label>
                <input
                  type="password"
                  id="password"
                  className={
                    isValidPassword ? styles.isValid : styles.isNotValid
                  }
                  placeholder="Passwort"
                  name="password"
                  value={formData.password}
                  onChange={handleInput}
                  required
                />
              </p>
              <p
                className={
                  formData.password != "" && isPasswordConfirm
                    ? styles.checked
                    : ""
                }
              >
                <label htmlFor="passwordConfirm">Passwort Wiederholung:</label>
                <input
                  type="password"
                  id="passwordConfirm"
                  className={
                    formData.password != "" && isPasswordConfirm
                      ? styles.isValid
                      : styles.isNotValid
                  }
                  placeholder="Passwort Wiederholung"
                  name="passwordConfirm"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  required
                />
              </p>

              <p>
                <span className={errMessage ? styles.errorSpan : styles.hidden}>
                  {errMessage}
                </span>
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
