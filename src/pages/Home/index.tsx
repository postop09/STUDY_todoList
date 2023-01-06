import React, { useEffect, useState } from "react";
import * as APIs from "../../api/APIs";
import styled from "styled-components";
import { TitleH2 } from "../../style/style";
import Button from "../../component/Button";
import ListItem from "../../component/ListItem";
import Register from "./Register";
import { TodoDetail, TodoList } from "../../types/type";
import Detail from "./Detail";
import apiErrorHandler, { ApiError } from "../../api/apiErrorHandler";
import { PATH } from "../../const/enums";

// TODO - 로그아웃?
const Index = () => {
  const [todoList, setTodoList] = useState<TodoList[]>();
  const [isRegister, setIsRegister] = useState(true);
  const [todoDetail, setTodoDetail] = useState<TodoDetail>({
    id: "",
    title: "",
    content: "",
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    getList();
    setReloadDetailState();
    window.addEventListener("popstate", setDetailState);
    return () => window.removeEventListener("popstate", setDetailState);
  }, []);

  // 새로고침 시 이벤트
  const setReloadDetailState = () => {
    if (window.history.state) {
      setIsRegister(false);
      setTodoDetail(window.history.state);
    }
  };

  // 뒤로가기 시 이벤트
  const setDetailState = () => {
    const pathName = window.location.pathname;
    if (pathName !== PATH.HOME) {
      setTodoDetail(window.history.state);
    }
  };

  const getList = async () => {
    try {
      const res = await APIs.getTodoList();
      const data: TodoDetail[] = res.data;
      const newData = data.filter((item) => item.title);
      setTodoList(newData);
    } catch (e) {
      const err = e as ApiError;
      apiErrorHandler(err);
    }
  };

  const onDetail = async (id: string) => {
    setIsRegister(false);
    try {
      const { data } = await APIs.getTodo(id);
      setTodoDetail(data);
      window.history.pushState(data, "", `${PATH.HOME}/${id}`);
    } catch (e) {
      const err = e as ApiError;
      apiErrorHandler(err);
    }
  };

  const onDelete = async (id: string) => {
    try {
      const { data } = await APIs.deleteTodo(id);
      if (data.id) {
        getList();
      }
    } catch (e) {
      const err = e as ApiError;
      apiErrorHandler(err);
    }
  };

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
          {todoList &&
            todoList.map((todo) => {
              return (
                <ListItem
                  key={todo.id}
                  title={todo.title}
                  onDetail={() => onDetail(todo?.id)}
                  onDelete={() => onDelete(todo?.id)}
                />
              );
            })}
        </Ul>
      </TodoWrapper>
      {isRegister && <Register onSuccess={getList} />}
      {!isRegister && <Detail {...todoDetail} onSuccess={getList} />}
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
  border-radius: ${({ theme }) => theme.ROUND.sm};
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
