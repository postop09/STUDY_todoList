import React from "react";
import Button from "./Button";
import styled from "styled-components";

type ItemProps = {
  title: string;
  onDetail: () => void;
  onDelete: () => void;
};

const ListItem = ({ title, onDetail, onDelete }: ItemProps) => {
  return (
    <Li>
      <ContentBtn type="button" onClick={onDetail}>
        {title}
      </ContentBtn>
      <BtnWrapper>
        <Button onClick={onDelete}>삭제</Button>
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
  width: 100%;
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
