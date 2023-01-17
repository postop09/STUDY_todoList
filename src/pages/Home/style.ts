import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const TodoWrapper = styled.section`
  box-shadow: 0 0 5px 1px #00000040;
  border: 1px solid black;
  border-radius: ${({theme}) => theme.ROUND.sm};
  width: 500px;
  padding: 2rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Ul = styled.ul`
  li:not(li:last-child) {
    margin-bottom: 0.5rem;
  }
`;

export const NoneListTxt = styled.p`
  display: flex;
  align-items: center;
  box-shadow: 0 0 3px 1px #00000030;
  border: 1px solid lightgray;
  border-radius: ${({ theme }) => theme.ROUND.xs};
  width: 100%;
  height: 51px;
  padding: 0.5rem;
  color: lightgray;
`;