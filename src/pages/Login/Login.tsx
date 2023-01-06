import React, { useEffect, useState } from "react";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { BtnWrapper, InputWrapper, TitleH2 } from "../../style/style";
import { AccType, AuthChange } from "../../types/type";
import onChangeSetValue from "../../util/onChangeSetValue";
import loginValidation from "../../util/loginValidation";
import * as APIs from "../../api/APIs";
import { PATH } from "../../const/enums";
import apiErrorHandler, { ApiError } from "../../api/apiErrorHandler";

const Login = ({ onChangeAuth }: AuthChange) => {
  const [account, setAccount] = useState<AccType>({ email: "", password: "" });

  useEffect(() => {
    const authToken = localStorage.getItem("Authorization");
    if (authToken) {
      window.location.replace(PATH.HOME);
    }
  }, []);

  const onLogin = async () => {
    try {
      const res = await APIs.postLogin(account);
      localStorage.setItem("Authorization", res.token);
      window.location.replace(PATH.HOME);
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
          <Button onClick={onChangeAuth}>회원가입</Button>
          <Button
            onClick={onLogin}
            disabled={!loginValidation(account)}
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
