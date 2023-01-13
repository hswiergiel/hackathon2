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
  const [currentUser, setCurrentUser] = useState({});
  const [hidden, setHidden] = useState("");
  const [hidden2, setHidden2] = useState("");
  const [user, setUser] = useState("");
  const context = useMemo(
    () => ({
      loggedIn,
      currentUser,
      setLoggedIn,
      setCurrentUser,
      cars,
      setCars,
      hidden,
      setHidden,
      hidden2,
      setHidden2,
      user,
      setUser,
    }),
    [
      loggedIn,
      currentUser,
      setCurrentUser,
      setLoggedIn,
      cars,
      setCars,
      hidden,
      setHidden,
      hidden2,
      setHidden2,
      user,
      setUser,
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
