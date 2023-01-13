import React from "react";
import { TitleH2 } from "../../style/style";
import Button from "../../component/Button";
import ListItem from "../../component/ListItem";
import Register from "./Register";
import Detail from "./Detail";
import useGetTodoList from "../../hooks/todo/queries/useGetTodoList";
import * as Style from "./style";
import { PATH } from "../../const/path";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const {todoList} = useGetTodoList();
  const pathName = window.location.pathname;
  const todoId = pathName.split("/")[2];
  const navigate = useNavigate();

  return (
    <Style.Wrapper>
      <Style.TodoWrapper>
        <Style.TitleWrapper>
          <TitleH2>목록</TitleH2>
          <div>
            <Button onClick={() => navigate(PATH.HOME)}>추가</Button>
          </div>
        </Style.TitleWrapper>
        <Style.Ul>
          {todoList?.map((todo) => {
              return <ListItem key={todo?.id} {...todo}/>;
          })}
          {todoList?.length === 0 && <Style.NoneListTxt>새로운 할 일을 추가해주세요.</Style.NoneListTxt>}
        </Style.Ul>
      </Style.TodoWrapper>
      {todoId ? <Detail todoId={todoId}/> : <Register/>}
    </Style.Wrapper>
  );
};

export default Index;