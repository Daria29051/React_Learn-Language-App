
import React from 'react';
import st from './header.module.scss';
import logo from '../../assets/icons/logo.png';
import Customlink from '../CustomLink/CustomLink';
import { useNavigate } from 'react-router-dom';




export default function Header() {
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate('/');
  }

  return (
    <header className={st.header}>
    <img src={logo} alt="logo" className={st.headerLogo} onClick={navigateHome}/>
      <nav className={st.nav}>
        <div className={st.navPages}>
        <Customlink to='/' className={st.navLink}>Home</Customlink>
        <Customlink to='/cards' className={st.navLink}>Cards</Customlink>
        <Customlink to='/game'className={st.navLink}>Game</Customlink>
        </div>
        <div className={st.navLogin}>
        <Customlink to='/login' className={st.navLink}>Login</Customlink>
        <Customlink to='/register' className={st.navLink}>Register</Customlink>
        </div>
      </nav>
    </header>
  )
}
