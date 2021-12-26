import { useRef } from "react";
// Styles
import "./login.scss";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email.current.value);
    console.log(password.current.value);
  };
  return (
    <div className="login">
      <div className="login_wrapper">
        <div className="login_wrapper__left">
          <h3>SocialApp</h3>
          <span className="description">
            Connect with friends and the world around you on this Social App.
          </span>
        </div>
        <div className="login_wrapper__right">
          <form className="box" onSubmit={handleSubmit}>
            <input
              ref={email}
              required
              type="email"
              placeholder="Email"
              className="login-input"
            />
            <input
              ref={password}
              minLength="6"
              required
              type="password"
              placeholder="Password"
              className="login-input"
            />
            <button className="login-button">Log In</button>
            <span className="login-forgot">Forgot Password?</span>
            <button className="login-register-button">
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
