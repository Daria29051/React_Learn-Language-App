import Register from "../Register/Register";
import Login from "../Login/Login";
import st from './header.module.scss';
import logo from '../../assets/icons/logo.png';


function Header() {
  return (

      <div className={st.header}>
        <div className={st.header__logoPart}>
        <img src={logo} alt="logo" className={st.header__logo}/>
        <p className={st.header__title}> Make English  a part of your life</p>
        </div>

        <div className={st.header__loginPart}>
        <Register></Register>
        <Login></Login>
        </div>
      </div>

  );
}

export default Header;