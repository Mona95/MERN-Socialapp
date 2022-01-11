import { useRef } from "react";
import {useNavigate} from "react-router";
import axios from "axios"
// Styles
import "./register.scss";

export default function Login() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if(password.current.value !== confirmPassword.current.value) {
      confirmPassword.current.setCustomValidity("Passwords don't match")
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      }
      try{
        await axios.post("/auth/register", user)
        navigate("/login")
      }
      catch(err){
        console.log(err)
      }
    }
  };

  return (
    <div className="register">
      <div className="register_wrapper">
        <div className="register_wrapper__left">
          <h3>SocialApp</h3>
          <span className="description">
            Connect with friends and the world around you on this Social App.
          </span>
        </div>
        <div className="register_wrapper__right">
          <form className="box" onSubmit={handleClick}>
            <input
              required
              type="text"
              placeholder="Username"
              ref={username}
              className="register-input"
            />
            <input
              required
              type="email"
              placeholder="Email"
              ref={email}
              className="register-input"
            />
            <input
              required
              type="password"
              placeholder="Password"
              ref={password}
              className="register-input"
            />
            <input
              required
              type="password"
              placeholder="Confirm Password"
              ref={confirmPassword}
              className="register-input"
            />
            <button className="register-button" type="submit">Sign Up</button>
            <button className="register-login-button">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
