import React, { useState } from 'react';

const AuthContext = React.createContext();
const { Provider } = AuthContext;

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ data: null });

  const setUserAuthInfo = ({ user }) => {
    const data = localStorage.setItem("user", user.data);
    setAuthState({ data: true });
  }

  const isUserAuthenticated = () => !!authState.data;

  return (
    <Provider
      value={{
        authState,
        setAuthState: (userAuthInfo) => setUserAuthInfo(userAuthInfo),
        isUserAuthenticated
      }}
    >
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }