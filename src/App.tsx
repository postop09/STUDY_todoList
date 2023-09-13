import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import apiErrorHandler from "./api/apiErrorHandler";
import Router from "./router/Router";
import {AppProvider} from "./AppContext";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: (error) => apiErrorHandler(error as any),
    },
    mutations: {
      onError: (error) => apiErrorHandler(error as any),
    },
  }
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <Router/>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
