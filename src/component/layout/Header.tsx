import React from "react";
import Button from "../Button";
import styled from "styled-components";
import { PATH } from "../../const/path";
import useToken from "../../hooks/token/useToken";

const Header = () => {
  const pathName = window.location.pathname;
  const {clearToken} = useToken();

  const onRemoveAuthToken = () => {
    clearToken();
    alert("로그아웃 되었습니다.");
    window.location.replace(PATH.SIGN_IN);
  };

  return (
    <HeaderWrapper>
      <h1>원티드 프리온보딩 챌린지</h1>
      {pathName !== PATH.SIGN_UP && pathName !== PATH.SIGN_IN && (
        <div>
          <Button onClick={onRemoveAuthToken}>로그아웃</Button>
        </div>
      )}
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
`;
