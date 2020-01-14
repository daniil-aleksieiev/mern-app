import React, { useContext } from 'react';
import { NavLink, useHistory} from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import logo from '../images/ds-logo.svg';

export const Navbar = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);

  const logoutHandler = event => {
    event.preventDefault();
    auth.logout();
    history.push('/');
  };

  return (
    <nav>
      <div className="nav-wrapper blue darken-1" style={{ padding: '0 2rem'}}>
        <a href="https://github.com/daniil-aleksieiev/" target="_blank" className="brand-logo" rel="noopener noreferrer">
          <img src={logo} alt="ds-logo" />
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><NavLink to="/create">Create</NavLink></li>
          <li><NavLink to="/links">Links</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>Logout</a></li>
        </ul>
      </div>
    </nav>
  );
};
