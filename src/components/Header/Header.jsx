
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Customlink from '../CustomLink/CustomLink';
import logo from '../../assets/icons/logo.png';
import st from './header.module.scss';




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
