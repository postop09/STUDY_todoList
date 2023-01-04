import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Layout from "./component/layout/Layout";
import { AppProvider } from "./context/AppContext";
import { PATH } from "./const/enums";
import Detail from "./pages/Home/Detail";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path={PATH.ROOT} element={<Navigate to={PATH.AUTH} />} />
            <Route path={PATH.AUTH} element={<Login />} />
            <Route path={PATH.HOME} element={<Home />} />
            <Route path={PATH.TODO} element={<Detail />} />
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
