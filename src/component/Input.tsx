import React, { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";

type InputProps = {
  type?: HTMLInputTypeAttribute;
  label?: string;
  htmlFor: string;
};

const Input = (props: InputProps) => {
  const { label, htmlFor, type = "text" } = props;

  return (
    <Wrapper>
      <Label htmlFor={htmlFor}>{label}</Label>
      <InputW id={htmlFor} type={type} />
    </Wrapper>
  );
};

export default Input;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Label = styled.label`
  display: inline-block;
  min-width: 100px;
`;

const InputW = styled.input`
  width: 100%;
  padding: 2px 5px;
`;
