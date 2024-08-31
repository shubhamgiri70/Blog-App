import "../App.css";

function Signup() {
  return (
    <>
      <div className="user-details">
        <h2>Sign up</h2>
        <p>have an account?</p>
        <form className="flex flex-column">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button type="submit">Signup</button>
        </form>
      </div>
    </>
  );
}

export default Signup;
