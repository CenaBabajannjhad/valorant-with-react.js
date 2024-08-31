import React from "react";
// import Title from './components/Title'
import NavLinks from './NavLinks'
// img
import riotLogo from '../assets/images/icons/riot games.png'
import mainLogo from '../assets/images/icons/logo.png'
import avatar from '../assets/images/avatar/akali.png'

const Header = () => {
  return (
    <header className="header">
      <div className="logo-wrapper">
        <div className="riot-wrapper">
          <img src={riotLogo} alt="riot game" />
        </div>
        <div className="valorant-wrapper">
          <img src={mainLogo} alt="valorant-logo" />
        </div>
      </div>

      <nav className="header-navbar">
        <ul className="navbar">
          <NavLinks>game</NavLinks>
          <NavLinks>champions</NavLinks>
          <NavLinks>news</NavLinks>
          <NavLinks>patch notes</NavLinks>
          <NavLinks>descover</NavLinks>
          <NavLinks>esprts</NavLinks>
          <NavLinks>unverse</NavLinks>
          <NavLinks>shop</NavLinks>
          <NavLinks>support</NavLinks>
        </ul>
      </nav>

      <div className="user-profile-wrapper">
        <div className="user-avatar-wrapper">
          <img
            className="avatar"
            src={avatar}
            alt="avatar-img"
          />
        </div>
        <div className="user-name-wrapper">
          <p className="user-name">uhepkhid</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
