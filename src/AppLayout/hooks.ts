import { useCallback } from "react";
import { useHistory } from "react-router-dom";
import routes from "../setup/routes";

export const useLogout = () => {
  const history = useHistory();

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    history.push(routes.LOGIN);
  }, [history]);

  return logout;
};

export const useIsLoggedIn = () => {
  return !!localStorage.getItem("token");
};
