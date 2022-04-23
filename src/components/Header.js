import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <Link id="logo" to="/">Reviews</Link>
    </header>
  );
};

export default Header;
