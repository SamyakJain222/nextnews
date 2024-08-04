import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [login, setLogin] = useState("");

  useEffect(() => {
    const sessionUid = sessionStorage.getItem('cookieUid');
    if (sessionUid) {
      setLogin(JSON.parse(sessionUid));
    }
  }, []);

  const contextLogin = (uid) => {
    sessionStorage.setItem('cookieUid', JSON.stringify(uid));
    setLogin(uid);
  };
  const contextLogout = () => {
    sessionStorage.removeItem('cookieUid');
    setLogin("");
  };

  return (
    <AuthContext.Provider value={{ login, contextLogin, contextLogout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
