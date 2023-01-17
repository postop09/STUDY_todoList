import React from "react";
import { BtnWrapper, TitleH2 } from "../../../style/style";
import Input from "../../../component/Input";
import Button from "../../../component/Button";
import * as Style from "./style";
import useDetailTodo from "../../../hooks/todo/detail/useDetailTodo";

const Index = ({todoId}: {todoId: string}) => {
  const {todoList, updateValue, handleModify, isReadOnly, setIsReadOnly} = useDetailTodo(todoId);

  return (
    <Style.Wrapper>
      <TitleH2>TO DO</TitleH2>
      <Input
        htmlFor={"inp_title"}
        label={"제목"}
        onChange={e => updateValue("title", e.target.value)}
        value={todoList.title}
        readOnly={isReadOnly}
      />
      <Style.InputWrapper>
        <Style.Label htmlFor="inp_content">내용</Style.Label>
        <Style.TextArea
          name="content"
          id="inp_content"
          onChange={e => updateValue("content", e.target.value)}
          value={todoList.content}
          readOnly={isReadOnly}
        ></Style.TextArea>
      </Style.InputWrapper>
      <BtnWrapper>
        {!isReadOnly && <Button onClick={handleModify}>저장하기</Button>}
        {isReadOnly && (
          <Button onClick={() => setIsReadOnly(false)}>수정하기</Button>
        )}
      </BtnWrapper>
    </Style.Wrapper>
  );
};

export default Index;
