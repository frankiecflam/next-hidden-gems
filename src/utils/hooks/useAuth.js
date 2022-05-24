import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const useAuth = (authToken) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    setIsAuthenticated(token === authToken);
  }, [token, authToken]);

  return isAuthenticated;
};

export default useAuth;
