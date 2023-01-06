import { createContext } from "react";

type Store = {};

interface ContextProps {
  children: React.ReactNode | React.ReactNode[];
}

const AppContext = createContext<Store | null>(null);

const AppProvider = ({ children }: ContextProps) => {
  const store = {};

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

export { AppProvider, AppContext };
