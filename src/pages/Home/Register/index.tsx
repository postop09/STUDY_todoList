import React from "react";
import { BtnWrapper, TitleH2 } from "../../../style/style";
import Input from "../../../component/Input";
import Button from "../../../component/Button";
import useRegisterTodo from "../../../hooks/todo/register/useRegisterTodo";
import * as Style from "./style";

const Index = () => {
  const {onRegister, todoList, updateValue} = useRegisterTodo();

  return (
    <Style.Wrapper>
      <TitleH2>TO DO</TitleH2>
      <Input
        htmlFor={"inp_title"}
        label={"제목"}
        onChange={e => updateValue("title", e.target.value)}
        value={todoList.title}
      />
      <Style.InputWrapper>
        <Style.Label htmlFor="inp_content">내용</Style.Label>
        <Style.TextArea
          name="content"
          id="inp_content"
          onChange={e => updateValue("content", e.target.value)}
          value={todoList.content}
        ></Style.TextArea>
      </Style.InputWrapper>
      <BtnWrapper>
        <Button onClick={() => onRegister()}>등록하기</Button>
      </BtnWrapper>
    </Style.Wrapper>
  );
};

export default Index
