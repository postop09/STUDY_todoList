import React from "react";
import Input from "../../component/Input";
import Button from "../../component/Button";
import apiRequest from "../../api/apiRequest";
import { BtnWrapper, InputWrapper, TitleH2 } from "../../style/style";

const Login = ({ setNewAccount }: any) => {
  const getLogin = async () => {
    const data = {
      email: "postop09@naver.com",
      password: "12345678",
    };

    const res = await apiRequest("POST", "/users/login", null, data);
    console.log(res);
  };

  return (
    <>
      <TitleH2>로그인</TitleH2>
      <form action="">
        <InputWrapper>
          <Input htmlFor={"inp_id"} label={"아이디"} />
          <Input htmlFor={"inp_pw"} label={"비밀번호"} type={"password"} />
        </InputWrapper>
        <BtnWrapper>
          <Button onClick={() => setNewAccount(true)}>회원가입</Button>
          <Button onClick={getLogin}>로그인</Button>
        </BtnWrapper>
      </form>
    </>
  );
};

export default Login;
