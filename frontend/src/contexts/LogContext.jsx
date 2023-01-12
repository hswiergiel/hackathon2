import { createContext, useState, useMemo } from "react";
import { PropTypes } from "prop-types";

const LogContext = createContext({
  setLoggedIn: null,
  loggedIn: false, // à compléter
});
export default LogContext;

export function LogContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({
    id: null,
    email: null,
  });

  const context = useMemo(
    () => ({
      loggedIn,
      setLoggedIn,
      user,
      setUser,
    }),
    [loggedIn, setLoggedIn, user, setUser]
  );

  return <LogContext.Provider value={context}>{children}</LogContext.Provider>;
}

LogContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
