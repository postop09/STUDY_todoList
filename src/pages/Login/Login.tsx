import React, { useState } from "react";
import Input from "../../component/Input";
import Button from "../../component/Button";
import apiRequest from "../../api/apiRequest";
import { BtnWrapper, InputWrapper, TitleH2 } from "../../style/style";
import { AccType } from "../../types/type";
import onChangeSetValue from "../../util/onChangeSetValue";
import validationCheck from "./validationCheck";

const Login = ({ setNewAccount }: any) => {
  const [account, setAccount] = useState<AccType>({ email: "", password: "" });

  const onLogin = async () => {
    try {
      const res = await apiRequest("POST", "/users/login", null, account);
      if (res.token) {
        console.log(res.token);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <TitleH2>로그인</TitleH2>
      <form action="">
        <InputWrapper>
          <Input
            htmlFor={"inp_id"}
            label={"아이디"}
            onChange={(e) =>
              onChangeSetValue(setAccount, "email", e.target.value)
            }
          />
          <Input
            htmlFor={"inp_pw"}
            label={"비밀번호"}
            type={"password"}
            onChange={(e) =>
              onChangeSetValue(setAccount, "password", e.target.value)
            }
          />
        </InputWrapper>
        <BtnWrapper>
          <Button onClick={() => setNewAccount(true)}>회원가입</Button>
          <Button onClick={onLogin} disabled={!validationCheck(account)}>
            로그인
          </Button>
        </BtnWrapper>
      </form>
    </>
  );
};

export default Login;
