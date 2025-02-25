import styles from "./Login.module.css";

export const Login = () => {
  return (
    <main>
      <h1>Login</h1>
      <form className={styles.LoginForm} action="" method="POST">
        <p>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" placeholder="Email" />
        </p>
        <p>
          <label htmlFor="password">Passwort:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Passwort"
          />
        </p>
        <p>
          <button type="submit">Login</button>
        </p>
      </form>
    </main>
  );
};

export default Login;
