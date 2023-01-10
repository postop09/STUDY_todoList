import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Layout from "./component/layout/Layout";
import { PATH } from "./const/enums";
import { QueryClient, QueryClientProvider } from "react-query";

export const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route element={<Layout />}>
              <Route path={PATH.ROOT} element={<Navigate to={PATH.AUTH} />} />
              <Route path={PATH.AUTH} element={<Login />} />
              <Route path={PATH.HOME} element={<Home />} />
              <Route path={`${PATH.HOME}/:id`} element={<Home />} />
              <Route path="/*" element={<Error />} />
            </Route>
          </Routes>
        </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
