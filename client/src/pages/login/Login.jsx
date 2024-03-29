import { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { loginCall } from "../../apiCalls";
import CircularProgress from "@material-ui/core/CircularProgress";

// Styles
import "./login.scss";

export default function Login() {
  const email = useRef();
  const password = useRef();

  const { isFetching, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
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
            <button type="submit" className="login-button" disabled={isFetching}>
              {isFetching ? <CircularProgress color="inherit" /> : "Log In"}
            </button>
            <span className="login-forgot">Forgot Password?</span>
            <Link to="/register" className="login-register-button">
              Create a New Account
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
