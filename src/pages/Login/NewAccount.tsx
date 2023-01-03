import React from "react";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { BtnWrapper, InputWrapper, TitleH2 } from "../../style/style";

const NewAccount = ({ setNewAccount }: any) => {
  return (
    <>
      <TitleH2>회원가입</TitleH2>
      <form action="">
        <InputWrapper>
          <Input htmlFor={"inp_newId"} label={"아이디"} />
          <Input htmlFor={"inp_newPw"} label={"비밀번호"} type={"password"} />
        </InputWrapper>
        <BtnWrapper>
          <Button onClick={() => setNewAccount(false)}>뒤로가기</Button>
          <Button onClick={() => setNewAccount(false)}>계정생성</Button>
        </BtnWrapper>
      </form>
    </>
  );
};

export default NewAccount;
