import React, { FormEvent } from "react";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { AuthWrapper, BtnWrapper, InputWrapper, TitleH2 } from "../../style/style";
import isLoginValid from "../../util/isLoginValid";
import useSignIn from "../../hooks/auth/useSignIn";
import { PATH } from "../../const/path";
import preventSubmitEvent from "../../util/preventSubmitEvent";

const SignIn = () => {
  const {account, onSignIn, updateValue} = useSignIn();

  return (
    <AuthWrapper>
      <TitleH2>로그인</TitleH2>
      <form onSubmit={(e) => preventSubmitEvent(e, onSignIn)}>
        <InputWrapper>
          <Input
            htmlFor={"inp_id"}
            label={"아이디"}
            onChange={e => updateValue("email", e.target.value)}
            value={account.email}
          />
          <Input
            htmlFor={"inp_pw"}
            label={"비밀번호"}
            type={"password"}
            onChange={e => updateValue("password", e.target.value)}
            value={account.password}
          />
        </InputWrapper>
        <BtnWrapper>
          <Button onClick={() => window.location.href = PATH.SIGN_UP}>회원가입</Button>
          <Button disabled={!isLoginValid(account)} type="submit">로그인</Button>
        </BtnWrapper>
      </form>
    </AuthWrapper>
  );
};

export default SignIn;
