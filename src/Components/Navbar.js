import logo from "../Assest/logo.png";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar--flex">
      <img src={logo} className="logo"></img>
      <button className="btn--nav btn--home">Home</button>
      <div className="btn--auth">
        <button className="btn--nav btn--login">Login</button>
        <button className="btn--nav btn--signup">Sign Up</button>
      </div>
    </div>
  );
}

export default Navbar;
