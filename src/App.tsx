import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import apiErrorHandler from "./api/apiErrorHandler";
import Router from "./router/Router";

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
      <Router/>
    </QueryClientProvider>
  );
}

export default App;
