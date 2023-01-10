import React from "react";
import styled from "styled-components";

type BtnProps = {
  onClick: (e?: any) => void;
  disabled?: any;
  type?: "submit" | "button";
};

interface Button extends BtnProps {
  children: React.ReactNode | React.ReactNode[];
}

const Button = (props: Button) => {
  const { onClick, children, disabled, type = "button" } = props;

  if (disabled) {
    return (
      <DisabledBtn type="button" onClick={onClick} disabled={disabled}>
        {children}
      </DisabledBtn>
    );
  }

  return (
    <WriteBtn type={type} onClick={onClick} disabled={disabled}>
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
