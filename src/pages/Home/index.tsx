import React, {useContext, useEffect, useState} from "react";
import * as APIs from "../../api/APIs";
import styled from "styled-components";
import { TitleH2 } from "../../style/style";
import Button from "../../component/Button";
import ListItem from "./ListItem";
import Register from "./Register";
import {TodoDetailProps, TodoList} from "../../types/type";
import Detail from "./Detail";

type TodoId = TodoList & {id: string};

const Index = () => {
  const [todoList, setTodoList] = useState<TodoId[]>([])
  const [isRegister, setIsRegister] = useState(true);
  const [todoDetail, setTodoDetail] = useState<TodoDetailProps>({
    id: "",
    title: "",
    content: "",
    createdAt: "",
    updatedAt: "",
  });

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const res = await APIs.getTodoList();
      const data: TodoDetailProps[] = res.data;
      const newData = data.filter((item) => item.title);
      setTodoList(newData);
    } catch (e) {
      console.log(e);
    }
  };

  const onDetail = async (id: string) => {
    setIsRegister(false);
    try {
      const {data} = await APIs.getTodo(id);
      setTodoDetail(data);
    } catch (e) {
      console.log(e);
    }
  }

  const onDelete = async (id: string) => {
    try {
      const {data} = await APIs.deleteTodo(id);
      if (data.id) {
        getList();
      }
    } catch (e) {
      console.log(e);
    }
  }

  return (
      <Wrapper>
        <TodoWrapper>
          <TitleWrapper>
            <TitleH2>목록</TitleH2>
            <div><Button onClick={() => setIsRegister(true)}>추가</Button></div>
          </TitleWrapper>
          <Ul>
            {todoList.map((todo) => {
              return <ListItem key={todo.id} title={todo.title} onDetail={() => onDetail(todo.id)} onDelete={() => onDelete(todo.id)}/>
            })}
          </Ul>
        </TodoWrapper>
        {isRegister && <Register getList={getList}/>}
        {!isRegister && <Detail {...todoDetail}/>}
      </Wrapper>
  );
};

export default Index;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`

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
`

const Ul = styled.ul`
  li:not(li:last-child) {
    margin-bottom: 0.5rem;
  }
`;
