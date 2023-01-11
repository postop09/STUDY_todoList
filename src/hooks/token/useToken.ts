import { AUTH_TOKEN_KEY } from "../../const/token";

const useToken = () => {
  const KEY = AUTH_TOKEN_KEY;

  const getToken = (): string | null => {
    return localStorage.getItem(KEY);
  };

  const setToken = (token: string) => {
    return localStorage.setItem(AUTH_TOKEN_KEY, token);
  };

  const clearToken = () => {
    return localStorage.removeItem(KEY);
  };

  return {getToken, setToken, clearToken};
}

export default useToken;