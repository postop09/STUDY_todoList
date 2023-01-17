import styled from "styled-components";

/** ----------------------------------------------
 >>> TABLE OF CONTENTS
 -------------------------------------------------
 0. 공통
 1. 로그인
 ---------------------------------------------- */

// ----------------------------------------------
// 0. 공통
// ----------------------------------------------
export const TitleH2 = styled.h2`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  text-align: center;
`;

// ----------------------------------------------
// 1. 로그인
// ----------------------------------------------
export const AuthWrapper = styled.section`
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

export const BtnWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
