import React, { useEffect } from "react";
import * as APIs from "../../api/APIs";
import styled from "styled-components";
import { TitleH2 } from "../../style/style";
import Button from "../../component/Button";
import ListItem from "./ListItem";
import Detail from "./Detail";

const Index = () => {
  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await APIs.getList();
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <TitleH2>목록</TitleH2>
      <ListItem />
      <RegisterBtn>
        <Button onClick={() => {}}>추가하기</Button>
      </RegisterBtn>
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled.section`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 5px 1px #00000040;
  border: 1px solid black;
  border-radius: ${({ theme }) => theme.ROUND.sm};
  width: 500px;
  margin: auto;
  padding: 2rem;
`;

const RegisterBtn = styled.div`
  margin-top: 1.5rem;
`;
