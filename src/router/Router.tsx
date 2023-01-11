import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../component/layout/Layout";
import { PATH } from "../const/path";
import Home from "../pages/Home";
import Error from "../pages/Error";
import AuthCheck from "../component/AuthCheck";
import SignIn from "../pages/Auth/SignIn";
import SignUp from "../pages/Auth/SignUp";

const Router = () => {
  const AuthHome = AuthCheck(Home);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={PATH.ROOT} element={<Navigate to={PATH.SIGN_IN} />} />
          <Route path={PATH.SIGN_IN} element={<SignIn />} />
          <Route path={PATH.SIGN_UP} element={<SignUp />} />
          <Route path={PATH.HOME} element={<AuthHome />} />
          <Route path={`${PATH.HOME}/:id`} element={<AuthHome />} />
          <Route path="/*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;