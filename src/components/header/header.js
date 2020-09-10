import React from 'react';

import logo from '../../images/logo.svg';

import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Logo"/>
    </header>
  )
};

export default Header;
