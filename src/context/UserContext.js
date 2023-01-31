const { createContext, useState, useContext } = require('react');
const { getUser } = require('../services/auth');

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const currentUser = getUser();
  const [user, setUser] = useState(currentUser);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isActive, setIsActive] = useState(false);

  return (
    <UserContext.Provider
      value={{ user, setUser, email, setEmail, password, setPassword, isActive, setIsActive }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => {
  const data = useContext(UserContext);

  if (!data) {
    throw new Error('useUser must be encompassed in a UserProvider');
  }
  return data;
};

export { UserProvider, useUserContext };
