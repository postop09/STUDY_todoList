import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Layout from "./component/layout/Layout";
import {AppProvider} from "./context/AppContext";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/auth" />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/*" element={<Error />} />
          </Route>
        </Routes>
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
