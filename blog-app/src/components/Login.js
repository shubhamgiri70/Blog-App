function Login() {
  return (
    <>
      <div className="user-details">
        <h2>Signin</h2>
        <p>have an account?</p>
        <form className="flex flex-column">
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Signin</button>
        </form>
      </div>
    </>
  );
}

export default Login;
