import React from 'react';
import './Header.css';
import { useUserContext } from '../../context/UserContext.js';
import { Link } from 'react-router-dom';
import { signOut } from '../../services/auth.js';

export default function Header() {
  const { user, setUser, isActive, setIsActive } = useUserContext();

  const logoutUser = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <nav>
      <div className="header">
        <div>
          <div className="site">
            <h4>Header</h4>
            <a
              role="button"
              className={`navbar-burger ${isActive ? 'is-active' : ''}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbar-list"
              onClick={() => setIsActive((prev) => !prev)}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
        </div>
        <div className="links">
          {!user && (
            <div>
              <Link to="/auth/sign-up">Sign Up!</Link>
              <Link to="/auth/sign-in">Sign In!</Link>
            </div>
          )}{' '}
          {user && (
            <>
              <div>Hello {user.email}</div>
              <button onClick={logoutUser}>Sign Out</button>
            </>
          )}
        </div>
        {}
      </div>
    </nav>
  );
}
