import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BtnWrapper, TitleH2 } from "../../../style/style";
import Input from "../../../component/Input";
import Button from "../../../component/Button";
import onChangeSetValue from "../../../util/onChangeSetValue";
import { TodoDetail, Todo, SuccessAction } from "../../../types/type";
import * as APIs from "../../../api/APIs";
import apiErrorHandler, { ApiError } from "../../../api/apiErrorHandler";

const Index = (props: TodoDetail & SuccessAction) => {
  const { id, title, content, onSuccess } = props;
  const [todoList, setTodoList] = useState<Todo>({
    title: "",
    content: "",
  });
  const [isReadOnly, setIsReadOnly] = useState(true);

  useEffect(() => {
    setTodoList({
      title,
      content,
    });
  }, [title, content]);

  const onModify = async () => {
    try {
      await APIs.putTodo(id, todoList);
      setIsReadOnly(true);
      onSuccess();
    } catch (e) {
      const err = e as ApiError;
      apiErrorHandler(err);
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
        readOnly={isReadOnly}
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
          readOnly={isReadOnly}
        ></TextArea>
      </InputWrapper>
      <BtnWrapper>
        {!isReadOnly && <Button onClick={onModify}>저장하기</Button>}
        {isReadOnly && (
          <Button onClick={() => setIsReadOnly(false)}>수정하기</Button>
        )}
      </BtnWrapper>
    </Wrapper>
  );
};

export default Index;

const Wrapper = styled.section`
  box-shadow: 0 0 5px 1px #00000040;
  border: 1px solid black;
  border-radius: ${({ theme }) => theme.ROUND.sm};
  width: 500px;
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

  &[readOnly] {
    background-color: lightgray;
  }
`;
