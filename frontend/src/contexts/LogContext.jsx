import { createContext, useState, useMemo } from "react";
import { PropTypes } from "prop-types";

const LogContext = createContext({
  setLoggedIn: null,
  loggedIn: false, // à compléter
});
export default LogContext;

export function LogContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);

  const context = useMemo(
    () => ({
      loggedIn,
      setLoggedIn,
    }),
    [loggedIn, setLoggedIn]
  );

  return <LogContext.Provider value={context}>{children}</LogContext.Provider>;
}

LogContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
