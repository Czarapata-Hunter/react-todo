import React from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { useUserContext } from '../../context/UserContext.js';
import { authUser } from '../../services/auth.js';

export default function Auth() {
  const { email, setEmail, password, setPassword, user, setUser } = useUserContext();
  const { type } = useParams();

  if (user) {
    return <Redirect to="/todos" />;
  }

  const submitAuth = async () => {
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="auth">
      <nav className="panel-success">
        <div className="heading"> Welcome to Todo!</div>
        <div className="tabs">
          <NavLink to="/auth/sign-in">Sign In</NavLink>
          <NavLink to="/auth/sign-up">Sign Up</NavLink>
        </div>
        <div>
          <label>Email</label>
          <div>
            <input
              className="input"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label>Password</label>
          <div>
            <input
              className="password"
              type="password"
              placeholder="***********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div>
          <button className="button" onClick={submitAuth}>
            Submit
          </button>
        </div>
      </nav>
    </div>
  );
}
