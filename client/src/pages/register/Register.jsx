// Styles
import "./register.scss";

export default function Login() {
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
            <div className="box">
                <input type="text" placeholder="Username" className="register-input"/>
                <input type="email" placeholder="Email" className="register-input"/>
                <input type="password" placeholder="Password" className="register-input"/>
                <input type="password" placeholder="Confirm Password" className="register-input"/>
                <button className="register-button">Sign Up</button>
                <button className="register-login-button">Log into Account</button>
            </div>
        </div>
      </div>
    </div>
  );
}
