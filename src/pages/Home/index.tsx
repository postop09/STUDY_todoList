import React, { useEffect, useState } from "react";
import * as APIs from "../../api/APIs";
import styled from "styled-components";
import { TitleH2 } from "../../style/style";
import Button from "../../component/Button";
import ListItem from "../../component/ListItem";
import Register from "./Register";
import { TodoDetail } from "../../types/type";
import Detail from "./Detail";
import apiErrorHandler, { ApiError } from "../../api/apiErrorHandler";
import { useMutation, useQuery } from "react-query";
import { queryClient } from "../../App";

const Index = () => {
  const [isRegister, setIsRegister] = useState(true);
  const [todoDetail, setTodoDetail] = useState<TodoDetail>({
    id: "",
    title: "",
    content: "",
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    setReloadDetailState();
    window.addEventListener("popstate", setDetailState);
    return () => window.removeEventListener("popstate", setDetailState);
  }, []);

  // 새로고침 시 이벤트
  const setReloadDetailState = () => {
    if (window.history.state?.title) {
      setIsRegister(false);
      setTodoDetail(window.history.state);
    }
  };

  // 뒤로가기 시 이벤트
  const setDetailState = () => {
    if (window.history.state.title) {
      setTodoDetail(window.history.state);
    }
  };

  // 목록조회
  const {data} = useQuery("getTodo", async () => {
    try {
      const res = await APIs.getTodoList();
      const data: TodoDetail[] = res.data;
      return data.filter((item: TodoDetail) => item.title);
    } catch (e) {
      const err = e as ApiError;
      apiErrorHandler(err);
    }
  }, {refetchOnWindowFocus: false});

  const onDetail = async (id: string) => {
    setIsRegister(false);
    try {
      const {data} = await APIs.getTodo(id);
      setTodoDetail(data);
      window.history.pushState(data, "", "");
    } catch (e) {
      const err = e as ApiError;
      apiErrorHandler(err);
    }
  };

  const {mutate: onDelete} = useMutation((id: string) => APIs.deleteTodo(id), {
    onSuccess: () => {
      queryClient.invalidateQueries("getTodo");
    },
    onError: apiErrorHandler,
  });

  return (
    <Wrapper>
      <TodoWrapper>
        <TitleWrapper>
          <TitleH2>목록</TitleH2>
          <div>
            <Button onClick={() => setIsRegister(true)}>추가</Button>
          </div>
        </TitleWrapper>
        <Ul>
          {data &&
            data.map((todo) => {
              return (
                <ListItem
                  key={todo.id}
                  title={todo.title}
                  onDetail={() => onDetail(todo?.id)}
                  onDelete={() => onDelete(todo?.id)}
                />
              );
            })}
          {data?.length === 0 && <NoneListTxt>새로운 할 일을 추가해주세요.</NoneListTxt>}
        </Ul>
      </TodoWrapper>
      {isRegister && <Register/>}
      {!isRegister && <Detail {...todoDetail} />}
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const TodoWrapper = styled.section`
  box-shadow: 0 0 5px 1px #00000040;
  border: 1px solid black;
  border-radius: ${({theme}) => theme.ROUND.sm};
  width: 500px;
  padding: 2rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Ul = styled.ul`
  li:not(li:last-child) {
    margin-bottom: 0.5rem;
  }
`;

const NoneListTxt = styled.p`
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