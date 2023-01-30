import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Auth() {
  return (
    <div className="auth">
      <nav>
        <div className="heading"> Welcome to Todo!</div>
        <div className="tabs">
          <NavLink to="/auth/sign-in">Sign In</NavLink>
          <NavLink to="/auth/sign-up">Sign Up</NavLink>
        </div>
        <div>
          <label>Email</label>
          <div>
            <input className="input" type="email" placeholder="name@example.com" />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input className="password" type="password" placeholder="***********" />
          </div>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </nav>
    </div>
  );
}
