import React from "react";
import Input from "../../component/Input";
import Button from "../../component/Button";
import { AuthWrapper, BtnWrapper, InputWrapper, TitleH2 } from "../../style/style";
import isLoginValid from "../../util/isLoginValid";
import useSignUp from "../../hooks/auth/useSignUp";
import preventSubmitEvent from "../../util/preventSubmitEvent";

const SignUp = () => {
  const {newAcc, onSignUp, onCancel, updateValue} = useSignUp();

  return (
    <AuthWrapper>
      <TitleH2>회원가입</TitleH2>
      <form onSubmit={(e) => preventSubmitEvent(e, onSignUp)}>
        <InputWrapper>
          <Input
            htmlFor={"inp_newId"}
            label={"아이디"}
            onChange={e => updateValue("email", e.target.value)}
            value={newAcc.email}
          />
          <Input
            htmlFor={"inp_newPw"}
            label={"비밀번호"}
            type={"password"}
            onChange={e => updateValue("password", e.target.value)}
            value={newAcc.password}
          />
        </InputWrapper>
        <BtnWrapper>
          <Button onClick={onCancel}>취소</Button>
          <Button disabled={!isLoginValid(newAcc)} type="submit">계정생성</Button>
        </BtnWrapper>
      </form>
    </AuthWrapper>
  );
};

export default SignUp;
