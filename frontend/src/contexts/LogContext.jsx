import { createContext, useState, useMemo } from "react";
import { PropTypes } from "prop-types";

const LogContext = createContext({
  setLoggedIn: null,
  loggedIn: false, // à compléter
});
export default LogContext;

export function LogContextProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [cars, setCars] = useState();
  const [user, setUser] = useState({
    id: null,
    email: null,
  });
  const [hidden, setHidden] = useState("");
  const [hidden2, setHidden2] = useState("");
  const context = useMemo(
    () => ({
      loggedIn,
      setLoggedIn,
      user,
      setUser,
      cars,
      setCars,
      hidden,
      setHidden,
      hidden2,
      setHidden2,
    }),
    [
      loggedIn,
      setLoggedIn,
      user,
      setUser,
      cars,
      setCars,
      hidden,
      setHidden,
      hidden2,
      setHidden2,
    ]
  );

  return <LogContext.Provider value={context}>{children}</LogContext.Provider>;
}

LogContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
