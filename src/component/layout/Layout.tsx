import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <Outlet />
      </Wrapper>
    </>
  );
};

export default Layout;

const Wrapper = styled.main`
  max-width: 1100px;
  margin: auto;
`;
