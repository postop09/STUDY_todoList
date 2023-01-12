import React, { ButtonHTMLAttributes } from "react";
import styled from "styled-components";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode | React.ReactNode[];
}

const Button = (props: BtnProps) => {
  const { children, disabled} = props;

  if (disabled) {
    return (
      <DisabledBtn {...props}>
        {children}
      </DisabledBtn>
    );
  }

  return (
    <WriteBtn {...props}>
      {children}
    </WriteBtn>
  );
};

export default Button;

const WriteBtn = styled.button`
  box-shadow: 0 0 5px 1px #00000050;
  border-radius: ${({ theme }) => theme.ROUND.xs};
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.COLOR.original};
  color: white;
  white-space: nowrap;
  transition: all 0.15s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 1;
  }
`;

const DisabledBtn = styled.button`
  box-shadow: 0 0 5px 1px #00000050;
  border-radius: ${({ theme }) => theme.ROUND.xs};
  width: 100%;
  padding: 0.5rem 1rem;
  background-color: ${({ theme }) => theme.COLOR.original};
  color: white;
  opacity: 0.7;
  cursor: default;
`;
