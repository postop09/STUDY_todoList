import styled from "styled-components";

export const Wrapper = styled.section`
  box-shadow: 0 0 5px 1px #00000040;
  border: 1px solid black;
  border-radius: ${({ theme }) => theme.ROUND.sm};
  width: 500px;
  padding: 2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
  margin-top: 1rem;
`;

export const Label = styled.label`
  display: inline-block;
  min-width: 100px;
`;

export const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 2px 5px;
  resize: none;

  &[readOnly] {
    background-color: lightgray;
  }
`;