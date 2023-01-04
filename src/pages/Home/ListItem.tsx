import React from "react";
import Button from "../../component/Button";
import styled from "styled-components";

const ListItem = () => {
  return (
    <Li>
      <ContentBtn type="button">내용 선택 시 상세조회</ContentBtn>
      <BtnWrapper>
        <Button onClick={() => {}}>수정</Button>
        <Button onClick={() => {}}>삭제</Button>
      </BtnWrapper>
    </Li>
  );
};

export default ListItem;

const Li = styled.li`
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 5px 1px #00000040;
  border: 1px solid lightgray;
  border-radius: ${({ theme }) => theme.ROUND.xs};
  padding: 0.5rem;
  transition: all 0.15s;

  &:hover {
    background-color: ${({ theme }) => theme.COLOR.secondOriginal};
  }
`;

const BtnWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const ContentBtn = styled.button`
  white-space: nowrap;
  width: 100%;
  text-align: left;
`;
