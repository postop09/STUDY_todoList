import React, { useState } from "react";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { BtnWrapper, InputWrapper, TitleH2 } from "../../style/style";
import { AccType } from "../../types/type";
import onChangeSetValue from "../../util/onChangeSetValue";
import validationCheck from "./validationCheck";
import * as APIs from "../../api/APIs";
import { PATH } from "../../const/enums";
import apiErrorHandler, { ApiError } from "../../api/apiErrorHandler";

const Login = ({ setNewAccount }: any) => {
  const [account, setAccount] = useState<AccType>({ email: "", password: "" });

  const onLogin = async () => {
    try {
      const res = await APIs.postLogin(account);
      if (res.token) {
        // TODO - util 함수로 묶어주기
        localStorage.setItem("Authorization", res.token);
        window.location.replace(PATH.HOME);
      }
    } catch (e) {
      const err = e as ApiError;
      apiErrorHandler(err);
    }
  };

  return (
    <>
      <TitleH2>로그인</TitleH2>
      <form onSubmit={onLogin}>
        <InputWrapper>
          <Input
            htmlFor={"inp_id"}
            label={"아이디"}
            onChange={(e) =>
              onChangeSetValue(setAccount, "email", e.target.value)
            }
            value={account.email}
          />
          <Input
            htmlFor={"inp_pw"}
            label={"비밀번호"}
            type={"password"}
            onChange={(e) =>
              onChangeSetValue(setAccount, "password", e.target.value)
            }
            value={account.password}
          />
        </InputWrapper>
        <BtnWrapper>
          <Button onClick={() => setNewAccount(true)}>회원가입</Button>
          <Button
            onClick={onLogin}
            disabled={!validationCheck(account)}
            type="submit"
          >
            로그인
          </Button>
        </BtnWrapper>
      </form>
    </>
  );
};

export default Login;
