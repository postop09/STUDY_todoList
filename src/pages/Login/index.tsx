import React, { useState } from "react";
import NewAccount from "./NewAccount";
import Login from "./Login";
import styled from "styled-components";

const Index = () => {
  const [newAccount, setNewAccount] = useState(false);

  const onChangeAuth = () => {
    setNewAccount((prev) => !prev);
  };

  return (
    <Wrapper>
      {newAccount && <NewAccount onChangeAuth={onChangeAuth} />}
      {!newAccount && <Login onChangeAuth={onChangeAuth} />}
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 5px 1px #00000040;
  border: 1px solid black;
  border-radius: ${({ theme }) => theme.ROUND.sm};
  width: 500px;
  margin: auto;
  padding: 2rem;
`;
