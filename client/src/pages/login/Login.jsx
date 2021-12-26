// Styles
import "./login.scss";

export default function Login() {
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
            <div className="box">
                <input type="email" placeholder="Email" className="login-input"/>
                <input type="password" placeholder="Password" className="login-input"/>
                <button className="login-button">Log In</button>
                <span className="login-forgot">Forgot Password?</span>
                <button className="login-register-button">Create a New Account</button>
            </div>
        </div>
      </div>
    </div>
  );
}
