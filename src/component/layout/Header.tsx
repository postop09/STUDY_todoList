import React from "react";
import Button from "../Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../const/path";

const Header = () => {
  const navigate = useNavigate();
  const pathName = window.location.pathname;

  const onRemoveAuthToken = () => {
    localStorage.removeItem("Authorization");
    alert("로그아웃 되었습니다.");
    navigate(PATH.AUTH);
  };
  return (
    <HeaderWrapper>
      <h1>원티드 프리온보딩 챌린지</h1>
      {pathName !== PATH.AUTH && (
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
