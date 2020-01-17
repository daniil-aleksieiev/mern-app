import React, { useContext } from 'react';
import { NavLink, useHistory} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as Logo } from '../../images/ds-logo.svg';

import './Navbar.scss';

const Navbar = () => {
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
          <Logo />
        </a>
        <ul id="nav-mobile" className="navigation right hide-on-med-and-down">
          <li><NavLink to="/create" className="navigation__link" activeClassName="navigation__link--active">Create</NavLink></li>
          <li><NavLink to="/links" className="navigation__link" activeClassName="navigation__link--active">Links</NavLink></li>
          <li><a href="/" onClick={logoutHandler}>Logout <FontAwesomeIcon icon={faSignOutAlt} /></a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
