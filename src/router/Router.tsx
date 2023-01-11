import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../component/layout/Layout";
import { PATH } from "../const/path";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Error from "../pages/Error";
import AuthCheck from "../component/AuthCheck";

const Router = () => {
  const AuthHome = AuthCheck(Home);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATH.ROOT} element={<Navigate to={PATH.AUTH} />} />
          <Route path={PATH.AUTH} element={<Login />} />
          <Route path={PATH.HOME} element={<AuthHome />} />
          <Route path={`${PATH.HOME}/:id`} element={<AuthHome />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;