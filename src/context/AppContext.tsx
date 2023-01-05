import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../const/enums";

type Store = {
  navigate: any;
  authToken?: string;
};

interface ContextProps {
  children: React.ReactNode | React.ReactNode[];
}

const AppContext = createContext<Store | null>(null);

const AppProvider = ({ children }: ContextProps) => {
  const navigate = useNavigate();

  useEffect(() => {
    const authToken = localStorage.getItem("Authorization");
    if (authToken) {
      window.history.replaceState(null, "", PATH.HOME);
    }
  }, []);

  const store = {
    navigate,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
