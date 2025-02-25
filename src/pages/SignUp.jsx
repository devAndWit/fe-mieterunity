export const SignUp = () => {
  return (
    <main>
      <h1>Registerierung</h1>
      <form action="" method="POST">
        <p>
          <label htmlFor="email">Email:</label>
          <input type="text" name="email" id="email" placeholder="Email" />
        </p>
        <p>
          <label htmlFor="password">Passwort:</label>
          <input type="password" name="password" id="password" />
        </p>
        <p>
          <label htmlFor="passwordConfirm">Passwort Wiederholung:</label>
          <input type="password" name="passwordConfirm" id="passwordConfirm" />
        </p>
        <p>
          <button type="submit">Registrieren</button>
        </p>
      </form>
    </main>
  );
};

export default SignUp;
