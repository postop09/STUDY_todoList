import React, { useContext, useState } from "react";
import styled from "styled-components";
import { BtnWrapper, TitleH2 } from "../../../style/style";
import Input from "../../../component/Input";
import Button from "../../../component/Button";
import { AppContext } from "../../../context/AppContext";
import { PATH } from "../../../const/enums";
import onChangeSetValue from "../../../util/onChangeSetValue";
import { TodoList } from "../../../types/type";
import * as APIs from "../../../api/APIs";

const Index = () => {
  const context = useContext(AppContext);
  const navigate = context?.navigate;
  const [todoList, setTodoList] = useState<TodoList>({
    title: "",
    content: "",
  });

  const postTodo = async () => {
    try {
      const res = await APIs.postTodo(todoList);
      console.log(res);
      navigate("/home");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <TitleH2>TO DO</TitleH2>
      <Input
        htmlFor={"inp_title"}
        label={"제목"}
        onChange={(e) => onChangeSetValue(setTodoList, "title", e.target.value)}
        value={todoList.title}
      />
      <InputWrapper>
        <Label htmlFor="inp_content">내용</Label>
        <TextArea
          name="content"
          id="inp_content"
          onChange={(e) =>
            onChangeSetValue(setTodoList, "content", e.target.value)
          }
          value={todoList.content}
        ></TextArea>
      </InputWrapper>
      <BtnWrapper>
        <Button onClick={() => navigate(PATH.HOME)}>뒤로가기</Button>
        <Button onClick={postTodo}>등록하기</Button>
      </BtnWrapper>
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled.section`
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 5px 1px #00000040;
  border: 1px solid black;
  border-radius: ${({ theme }) => theme.ROUND.sm};
  width: 500px;
  margin: auto;
  padding: 2rem;
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: start;
  width: 100%;
  margin-top: 1rem;
`;

const Label = styled.label`
  display: inline-block;
  min-width: 100px;
`;

const TextArea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 2px 5px;
  resize: none;
`;
