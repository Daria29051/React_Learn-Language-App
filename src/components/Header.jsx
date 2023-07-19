import Register from "./Register";
import Login from "./Login";
import '../assets/styles/Style.scss';
import logo from '../assets/icons/logo.png';


function Header() {
  return (

      <div className="header">
        <div className="header__logo-part">
        <img src={logo} alt="logo" className="header__logo"/>
        <p className="header__title"> Make English  a part of your life</p>
        </div>

        <div className="header__login-part">
        <Register></Register>
        <Login></Login>
        </div>
      </div>

  );
}

export default Header;